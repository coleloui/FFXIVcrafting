const inquirer = require('inquirer');
const API = require('./util/API');

const item = [
  {
    type: 'input',
    message: 'what is the item name?',
    name: 'item',
  },
];

const test = async (info) => {
  console.log(`info`, info);
};

function question() {
  inquirer.prompt(item).then((answer) => {
    API.itemInfo(answer.item).then((res) => test(res.Results[0].ID));
  });
}

question();
