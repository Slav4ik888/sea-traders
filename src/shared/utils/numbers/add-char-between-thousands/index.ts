
export interface Config {
  divider? : string  // Divider
  rest?    : boolean // Нужно ли вернуть с дробной частью
}

/**
 * Возвращает строку с разделением тысяч выбранным символом
 * Знак дробной части допускается \. | \,
 */
export function addCharBetweenThousands(
  str    : number | string,
  config : Config = {} as Config
): string {
  if (str === undefined || str === null || str === '' ) return '';

  if (typeof str === 'number') {
    if (isNaN(str)) return ''
  }

  if (String(str) === '0') return '0'

  const {
    divider = ' ',
    rest
  } = config;
    
  // Перевести в строку
  let newStr = String(str)
    .match(/(\d|\,|\.)/g)
    .join('')
    .replace(',', '.')
    .replace(/^0+/g, '');

  let beforeDot = newStr;
  let afterDot = '';

  // Разрезаем до и после знака
  let commaIndex = newStr.indexOf('.');

  if (commaIndex !== -1) {
    beforeDot = newStr.slice(0, commaIndex);
    afterDot = rest ? newStr.slice(commaIndex) : '';
  }

  // Добавляем пробелы
  let result = '', newResult = '';

  if (beforeDot.length > 2) {
    let num = 0; // Чтобы отсчитывать по 3 числа
    for (let i = beforeDot.length - 1; i > -1; i--) {
      num++;
      if (num / 4 === Math.floor(num / 4) && (num > 0)) {
        num = 0;
        result += divider;
        i++;
      }
      else {
        result += beforeDot[i];
      }
    }

    // Переводим в обратную сторону
    for (let i = result.length - 1; i > -1; i--) {
      newResult += result[i];
    }
    beforeDot = newResult;
  }

  return beforeDot + afterDot
}
