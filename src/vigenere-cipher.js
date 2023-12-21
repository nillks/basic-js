const { NotImplementedError } = require('../extensions/index.js');

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  checkArgs(...args) {
    if (args.some(arg => typeof arg !== 'string')) {
      throw new Error('Incorrect arguments!');
    }
  }

  repeatKey(message, key) {
    return key.repeat(Math.ceil(message.length / key.length)).toUpperCase();
  }

  encrypt(message, key) {
    this.checkArgs(message, key);

    const repeatedKey = this.repeatKey(message, key);
    let result = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      const char = message[i].toUpperCase();
      if (this.alphabet.includes(char)) {
        const messageIndex = this.alphabet.indexOf(char);
        const keyIndex = this.alphabet.indexOf(repeatedKey[j]);
        const encryptedIndex = (messageIndex + keyIndex) % 26;
        const encryptedChar = this.alphabet[encryptedIndex];
        result += encryptedChar;
        j++;
      } else {
        result += char;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    this.checkArgs(encryptedMessage, key);

    const repeatedKey = this.repeatKey(encryptedMessage, key);
    let result = '';

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage[i].toUpperCase();
      if (this.alphabet.includes(char)) {
        const encryptedIndex = this.alphabet.indexOf(char);
        const keyIndex = this.alphabet.indexOf(repeatedKey[j]);
        const messageIndex = (encryptedIndex - keyIndex + 26) % 26;
        const decryptedChar = this.alphabet[messageIndex];
        result += decryptedChar;
        j++;
      } else {
        result += char;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
