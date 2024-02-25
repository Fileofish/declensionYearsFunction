export default function declensionYears(number) {
  const str = String(number);
  const lastDigit = str[str.length - 1];
  
  switch (true) {
    case lastDigit === '1':
      return 'год';
    case !['12', '13', '14'].includes(str) &&
      ['2', '3', '4'].includes(lastDigit):
      return 'годa';
    default:
      return 'лет';
  }
}