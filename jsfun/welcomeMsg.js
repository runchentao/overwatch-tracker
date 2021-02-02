'use strict';

// Default arguments, Closure
let msg2 = 'Good Luck Have Fun!'; //global scope
function printMsg(name, msg = ' to Overwatch Tracker! ') {
  return 'Welcome, ' + name + msg + msg2; //local scope
}

console.log(printMsg('username'));
