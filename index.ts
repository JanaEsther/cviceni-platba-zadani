function filterNonDigits(input: string): string {
  // Odstranění všech nečíselných znaků
  return input.replace(/\D/g, '');
}

function formatCreditCardNumber(cardNumber: string): string {
  // Odstranění nečíselných znaků
  const cleanedNumber = filterNonDigits(cardNumber);

  // Rozdělení čísla na skupiny po čtyřech číslicích
  const group = cleanedNumber.match(/.{1,4}/g);
  if (!group) {
    return ''; // Neplatné číslo
  }

  // Sestavení řetězce s pomlčkami
  const formattedNumber = group.join('-');
  return formattedNumber;
}

const userCardNumber: string = '1234-5678-9012-3456';
const formattedNumber: string = formatCreditCardNumber(userCardNumber);
console.log(formattedNumber); // Vypíše "1234-5678-9012-3456"
