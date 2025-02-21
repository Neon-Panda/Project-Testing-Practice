export { caesarCipher };

function caesarCipher(string, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const shiftedAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const charCode = char.charCodeAt(0);

    if (charCode >= 65 && charCode <= 90) {
      const charIndex = alphabet.indexOf(char.toLowerCase());
      string =
        string.slice(0, i) +
        shiftedAlphabet[charIndex].toUpperCase() +
        string.slice(i + 1);
    } else if (charCode >= 97 && charCode <= 122) {
      const charIndex = alphabet.indexOf(char);
      string =
        string.slice(0, i) + shiftedAlphabet[charIndex] + string.slice(i + 1);
    }
  }

  return string;
}
