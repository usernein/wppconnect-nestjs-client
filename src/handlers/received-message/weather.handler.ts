import axios from 'axios';
import { IUpdateHandler } from '../contracts/handler.interface';
import { MessagesService } from 'src/utils/wpp-connect-sdk';
import { ConfigService } from '@nestjs/config';
import { Injectable, Logger } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from 'src/generated/i18n.generated';
import { HandlerFilter } from 'src/utils/handler-filter';

const getCoordsUrl = 'https://api.weather.com/v3/location/search';
const weatherUrl =
  'https://api.weather.com/v3/aggcommon/v3-wx-observations-current';

const headers = {
  'User-Agent':
    'Dalvik/2.1.0 (Linux; U; Android 12; M2012K11AG Build/SQ1D.211205.017)',
};

// based on https://github.com/AmanoTeam/EduuRobot/blob/main/eduu/plugins/weather.py

function sendMessage(response: any, message: string) {
  MessagesService.postApiSendMessage(response.session, {
    phone: response.chatId,
    isGroup: response.isGroupMsg,
    message,
  });
}

@Injectable()
export class WeatherHandler implements IUpdateHandler {
  private readonly logger = new Logger(WeatherHandler.name);

  constructor(
    private readonly config: ConfigService,
    private readonly i18n: I18nService<I18nTranslations>,
    private readonly filter: HandlerFilter,
  ) {}

  match({ response }: any) {
    return this.filter.check(response).isCommand('clima');
  }

  async handle({ response }: any) {
    this.logger.log('.clima command received');

    const body = response.body;
    if (body.indexOf(' ') === -1) {
      return sendMessage(response, this.i18n.t('weather.error.generic'));
    }

    const city = body.substring(body.indexOf(' ') + 1);

    let coords;
    try {
      coords = await axios.get(getCoordsUrl, {
        params: {
          apiKey: this.config.get('WEATHER_API_KEY'),
          format: 'json',
          language: 'pt-BR',
          query: city,
        },
        headers,
      });
    } catch (err) {
      this.logger.error(err);
      this.handleInvalidLocation(response, city);
      return;
    }

    if (!coords.data.location) {
      return this.handleInvalidLocation(response, city);
    }

    const location = coords.data.location;
    const geocode = `${location.latitude[0]},${location.longitude[0]}`;

    const weather = await axios.get(weatherUrl, {
      params: {
        apiKey: this.config.get('WEATHER_API_KEY'),
        format: 'json',
        language: 'pt-BR',
        geocode: geocode,
        units: 'm',
      },
      headers,
    });

    const obs_current = weather.data['v3-wx-observations-current'];

    const address = location.address[0];
    const summary = obs_current.wxPhraseLong;
    const temperature = obs_current.temperature;
    const temperatureFeelsLike = obs_current.temperatureFeelsLike;
    const relativeHumidity = obs_current.relativeHumidity;
    const windSpeed = obs_current.windSpeed;

    const text = this.i18n.t('weather.result', {
      args: {
        address,
        summary,
        temperature,
        temperatureFeelsLike,
        relativeHumidity,
        windSpeed,
      },
    });

    sendMessage(response, text);
  }

  handleInvalidLocation(response: any, location: string) {
    sendMessage(
      response,
      this.i18n.t('weather.error.invalid-location', {
        args: {
          location,
        },
      }),
    );
  }
}
