
const calcBytes = (d: string): number => d.length * 2;

export function sizeOf<O extends Object>(data: O): number {
  let bytes = 0;

  if (!data || data === null || data === undefined) return bytes;

  switch (typeof data) {
    case 'number':
      bytes += 8;
      break;
    
    case 'string':
      bytes += calcBytes(data);
      break;
    
    case 'boolean':
      bytes += 4;
      break;
    
    case 'object':
      for (let key in data) {
        bytes += sizeOf(key);
        bytes += sizeOf(data[key]);
      }
      break;
  }

  return bytes;
};
