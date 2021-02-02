'use strict';

// Use of exports and require
module.exports = require('./welcomeMsg');
const arr = require('./passwords');

class Password {
  constructor() {}
  // Class static method
  static getPassword() {
    // Destructing array
    let [first] = arr;
    console.log('first element in the arr is', first);
    return arr;
  }
}

// Rest operator
const validatePassword = (...input) => {
  // Regular expression
  const regex = /^[a-zA-Z0-9!@#$%^&*]{8,18}$/;

  let passwords = [];
  for (const pw of input) {
    passwords += pw;
  }

  let morePasswords = ['hellow!@#$%!#@', '454532!@#', '808'];
  const evenMorePasswords = ['qwert123', 'helloworld'];

  // Spread Operator
  morePasswords = [...morePasswords, ...evenMorePasswords];
  let allpassword = [...passwords.split(','), ...morePasswords];

  const res = allpassword.map((p) => regex.test(p));

  console.log(allpassword);
  console.log(res);
};
const testInput = new Password();

validatePassword([
  Password.getPassword(testInput),
  ['guessmypassword', 'superStrongPw'],
]);
