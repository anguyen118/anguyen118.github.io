import { emojis } from './emoji';

export const getEmojiFavicon = (
  data: string[] | Record<string, any> = emojis,
): string[] | Record<string, any> | string => {
  if (Array.isArray(data)) {
    return data[Math.floor(Math.random() * data.length)];
  }

  const keys = Object.keys(data);

  return getEmojiFavicon(data[keys[Math.floor(Math.random() * keys.length)]]);
};
