const inquirer = require('inquirer');
const API = require('./util/API');

const item = [
  {
    type: 'input',
    message: 'what is the item name?',
    name: 'thing',
  },
];

const test = async (info) => {
  console.log(`info`, info);
};

const question = async () => {
  const answer = await inquirer.prompt(item);
  const { thing } = answer;
  const ping = await API.itemInfo(thing);
  test(ping);
};

question();
