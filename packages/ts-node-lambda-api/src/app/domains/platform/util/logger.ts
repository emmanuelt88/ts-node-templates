import * as winston from "winston";
import { isString, inspect } from "util";

const defaultLevel = process.env.LOG_LEVEL;
const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  let formattedMessage = message;
  try {
    formattedMessage = inspect(message);
  } catch {
    formattedMessage = message.toString();
  }
  return `${timestamp} ${level.toUpperCase()} [${label}]: ${formattedMessage}`;
});


const getName = (obj: any): string => {
  if (obj.name) {
    return obj.name;
  } else if (isString(obj)) {
    return obj.toString();
  }

  var funcNameRegex = /function (.{1,})\(/;
  var results = funcNameRegex.exec(obj.toString());
  var result = results && results.length > 1 && results[1];

  if (!result) {
    funcNameRegex = /return .([^;]+)/;
    results = funcNameRegex.exec(obj.toString());
    result = results && results.length > 1 && results[1].split(".").pop();
  }

  return result || "";
};

const getLogger = (context: string| any): winston.Logger => {
  const logger: winston.Logger = winston.createLogger({
    exitOnError: false,
    level: defaultLevel || "debug",
    format: combine(
      label({ label: getName(context) }),
      timestamp({
        format: "YYYY-MM-DD HH:mm:ss.SSS"
      }),
      myFormat
    ),
    transports: [
      new winston.transports.Console({
        format: winston.format.colorize({
          all: true
        })
      })
    ]
  });
  return logger;
};


export const LoggerFactory = {
  getLogger,
}
