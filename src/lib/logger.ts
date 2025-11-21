
type LogLevel = 'silent' | 'error' | 'warn' | 'log' | 'debug';

const LOG_LEVEL: LogLevel = (process.env.LOG_LEVEL as LogLevel) || 'log';
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const NOOP = () => {};

function createLogger(namespace: string) {
  const prefix = `[${namespace}]`;

  const shouldLog = (level: LogLevel) => {
    if (IS_PRODUCTION && LOG_LEVEL === 'silent') {
      return false;
    }

    const levels: Record<LogLevel, number> = {
      silent: 0,
      error: 1,
      warn: 2,
      log: 3,
      debug: 4,
    };

    return levels[level] <= levels[LOG_LEVEL];
  };

  const error = shouldLog('error') && typeof console !== 'undefined' && console.error
    ? console.error.bind(console, prefix)
    : NOOP;

  const warn = shouldLog('warn') && typeof console !== 'undefined' && console.warn
    ? console.warn.bind(console, prefix)
    : NOOP;

  const log = shouldLog('log') && typeof console !== 'undefined' && console.log
    ? console.log.bind(console, prefix)
    : NOOP;

  const debug = shouldLog('debug') && typeof console !== 'undefined' && console.debug
    ? console.debug.bind(console, prefix)
    : NOOP;

  return { error, warn, log, debug };
}

export const { error, warn, log, debug } = createLogger('app');
export default createLogger;
