import axios from 'axios';
import { IUpdateHandler } from '../contracts/handler.interface';
import { MessagesService } from 'src/utils/wpp-connect-sdk';
import { ConfigService } from '@nestjs/config';
import { Injectable, Logger } from '@nestjs/common';

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

  constructor(private readonly config: ConfigService) {}

  match({ response: { body } }: any) {
    return body?.startsWith('.clima');
  }

  async handle({ response }: any) {
    this.logger.log('.clima command received');

    const body = response.body;
    if (body.indexOf(' ') === -1) {
      return sendMessage(
        response,
        '❌ Comando inválido. Envie a localização desejada após o comando.\n\nExemplo: .clima Curitiba',
      );
    }

    const city = body.substring(body.indexOf(' ') + 1);

    const coords = await axios.get(getCoordsUrl, {
      params: {
        apiKey: this.config.get('WEATHER_API_KEY'),
        format: 'json',
        language: 'pt-BR',
        query: city,
      },
      headers,
    });

    if (!coords.data.location) {
      return sendMessage(response, '❌ Localização inválida: ' + city);
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

    const text = `*${address}*
- _${summary}_

⛅️ *Temperatura*: ${temperature} °C
😮‍💨 *Sensação térmica*: ${temperatureFeelsLike} °C
💧 *Umidade*: ${relativeHumidity}%
🌬 *Ventania*: ${windSpeed} km/h`;

    sendMessage(response, text);
  }
}
