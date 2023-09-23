import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'provision')
    .default('development'),
  NESTJS_PORT: Joi.number().default(21464),
  WPPCONNECT_BASE: Joi.string().required(),
  WPPCONNECT_TOKEN: Joi.string().required(),
  LOG_UPDATES: Joi.boolean().default(false),
  VERBOSE_UPDATES: Joi.boolean().default(false),
  EVENTS_TO_LOG: Joi.string().default(
    'incoming-call,on-ack,on-presence-changed,on-poll-response,on-reaction-message,on-revoked-message,on-update-label,qr-code,received-message,session-error,session-logged,whatsapp-status',
  ),
  WEATHER_API_KEY: Joi.string().optional(),
  RSYNC_DESTINATION: Joi.string().optional(),
  COMMAND_PREFIX: Joi.string().default('.'),
});
