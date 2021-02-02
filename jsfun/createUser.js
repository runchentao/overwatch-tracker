'use strict';

const user1 = [
  'Godly#37285',
  'NA',
  '24',
  'male',
  ['Tracer', 'Ana', 'Genji', 'Hanzo', 'Bastion', 'Sigma'],
];

const createUser = (input) => {
  const [nameTag, region, age, gender, freqHeroes] = input;

  if (nameTag.includes('#')) {
    const username = nameTag.split('#')[0];
    const id = nameTag.split('#')[1];

    console.log('username: ', username, '(', typeof username, ')');
    console.log('      id: ', id, '(', typeof id, ')');

    const top3MainHeroes = freqHeroes.slice(1, 4);

    const newUser = {
      name: username,
      id: id,
      age: age,
      gender: gender,
      region: region,
      top3MainHeroes: top3MainHeroes,
    };

    const userJSON = JSON.stringify(newUser);
    console.log(userJSON);

    const parsedUser = JSON.parse(userJSON);
    console.log(parsedUser);
  } else {
    console.log('Invalid name tag\n');
  }
};

createUser(user1);
