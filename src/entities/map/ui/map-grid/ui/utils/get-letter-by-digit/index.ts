/**
 * Цифру возвращает в виде буквы соответсвующей её номеру в алфавите,
 * если значение цифры больше чем букв в алфавите, то + доп букву (как в гугл таблицах)
 * if upper => to uppercase
 */
export const getLetterByDigit = (value: number, upper: boolean) => {
  let letter = 'a';

  if (!value) return '';

  const
    alphabet = 'abcdefghijklmnopqrstuvwxyz',
    getAlphaIdx  = (a: string) => alphabet.indexOf(a),
    lastAlpha = (a: string) => a[a.length - 1],
    prevAlpha = (a: string) => a[a.length - 2],
    nextAlpha = (a: string) => alphabet[getAlphaIdx(a) + 1],
    withoutLastAlpha = (a: string) => a.slice(0, a.length - 1),
    upLastAlpha = (a: string) => withoutLastAlpha(a) + nextAlpha(lastAlpha(a)),
    restToA = (rest: string) => rest.split('').map(it => 'a').join(''),
    isZ = (a: string) => a === 'z';
  
  
  const upLetter = (pieceOfLetter: string, rest = ''): string => {
    // console.log('pieceOfLetter: ', pieceOfLetter);
    // rest && console.log('rest: ', rest);

    let newLetter = pieceOfLetter

    if (isZ(lastAlpha(newLetter))) {
      if (prevAlpha(newLetter)) {
        return upLetter(withoutLastAlpha(newLetter), lastAlpha(newLetter) + rest) // console.log('Есть предыдущая');
      }
      else { 
        newLetter = 'a' + restToA(newLetter + rest); // console.log('Если нет предыдущей', newLetter);
      }
    }
    else {
      newLetter = upLastAlpha(newLetter) + restToA(rest); // console.log(newLetter);
    }
  
    return newLetter
  }


  // Начинаем с 2 потому что 1 в самом начале letter = 'a'
  for (let i = 2; i <= value; i++) {
    letter = upLetter(letter);
  }

  return upper ? letter.toUpperCase() : letter
}
