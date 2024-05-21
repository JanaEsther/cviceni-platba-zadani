function filterNonDigits(input) {
    // Odstranění všech nečíselných znaků
    return input.replace(/\D/g, "");
}
function formatCreditCardNumber(cardNumber) {
    // Odstranění nečíselných znaků
    var cleanedNumber = filterNonDigits(cardNumber);
    // Rozdělení čísla na skupiny po čtyřech číslicích
    var groups = cleanedNumber.match(/.{1,4}/g);
    if (!groups) {
        return ""; // Neplatné číslo
    }
    // Sestavení řetězce s pomlčkami
    var formattedNumber = groups.join("-");
    return formattedNumber;
}
var userCardNumber = "1234-5678-9012-3456";
var formattedNumber = formatCreditCardNumber(userCardNumber);
console.log(formattedNumber); // Vypíše "1234-5678-9012-3456"
