/** 
 * Number from String
 */
export const transformMinMax = (_min: string, _max: string): { min: number, max: number } => {
  const
    __min = parseInt(_min),
    min = __min < 0 ? __min * (-1) : __min,
    max = parseInt(_max);
  
  return { min, max }
}
