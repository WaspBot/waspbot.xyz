
type LogLevel = 'silent' | 'error' | 'warn' | 'log' | 'debug';

const validLevels: LogLevel[] = ['silent', 'error', 'warn', 'log', 'debug'];
const envLevel = process.env.LOG_LEVEL as string;
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const defaultLogLevel = process.env.LOG_LEVEL ?? (IS_PRODUCTION ? 'silent' : 'log');
const LOG_LEVEL: LogLevel = validLevels.includes(defaultLogLevel as LogLevel) 
  ? (defaultLogLevel as LogLevel) 
  : 'log';

const NOOP = () => {};

const LOG_LEVELS: Record<LogLevel, number> = {
  silent: 0,
  error: 1,
  warn: 2,
  log: 3,
  debug: 4,
};

function createLogger(namespace: string) {
  const prefix = `[${namespace}]`;

  const shouldLog = (level: LogLevel) => {
    return LOG_LEVELS[level] <= LOG_LEVELS[LOG_LEVEL];
  }

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

// Exported logger helpers: error, warn, log, debug
export const { error, warn, log, debug } = createLogger('app');
export default createLogger;
