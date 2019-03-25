
import * as winston from 'winston';
import { isString } from 'util';

const defaultLevel = process.env.LOG_LEVEL;
const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} ${level.toUpperCase()} [${label}]: ${message}`;
});

const getName = (obj: any): string => {    
  if (obj.name) {
      return obj.name;
  } else if(isString(obj)) {
    return obj.toString();
  }

  var funcNameRegex = /function (.{1,})\(/;   
  var results = (funcNameRegex).exec(obj.toString());
  var result = results && results.length > 1 && results[1];

  if(!result){
      funcNameRegex = /return .([^;]+)/;
      results = (funcNameRegex).exec(obj.toString());
      result = results && results.length > 1 && results[1].split(".").pop();
  }

  return result || "";
}
const getLoggerFor = (context: any): winston.Logger => {
  const logger:winston.Logger = winston.createLogger({
    exitOnError: false,
    level: defaultLevel || 'debug',
    format: combine(
      
      label({ label: getName(context)}),
      timestamp(),
      myFormat
    ),
    transports: [
      new winston.transports.Console({
        format: winston.format.colorize(),
      })
    ]
    // You can also comment out the line above and uncomment the line below for JSON format
    // format: format.json(),
    
  });
  return logger;
};

const logger:winston.Logger = getLoggerFor("Default");

export {
  logger,
  getLoggerFor
};