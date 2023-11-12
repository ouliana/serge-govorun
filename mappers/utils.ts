const isString = (value: unknown): value is string => {
  return typeof value === 'string' || value instanceof String;
};

const isNumber = (value: unknown): value is number => {
  return typeof value === 'number' || value instanceof Number;
};

const isBoolean = (value: unknown): value is boolean => {
  return typeof value === 'boolean' || value instanceof Boolean;
};

const parseString = (str: unknown): string => {
  if (isString(str)) return str;
  throw new Error('Incorrect or missing value');
};

const parseNumber = (num: unknown): number => {
  if (isNumber(num)) return num;
  throw new Error('Incorrect or missing value');
};

const toNumber = (value: unknown): number => {
  if (isString(value) && isNumber(Number(value))) return Number(value);

  if (isNumber(value)) return value;

  throw new Error('Incorrect or missing value');
};

const parseBoolean = (bool: unknown): boolean => {
  if (isBoolean(bool)) return bool;
  throw new Error('Incorrect or missing value');
};

export { isString, isNumber, parseString, parseNumber, toNumber, parseBoolean };
