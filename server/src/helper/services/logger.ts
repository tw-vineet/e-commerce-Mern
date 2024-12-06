// const winston = require("winston");
import winston from 'winston'

export const logger = winston.createLogger({
    transports: [new winston.transports.Console()],
});
