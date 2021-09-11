const { lookup } = require('dns');
const inquirer = require('inquirer');
const { recipe } = require('./util/API');
const API = require('./util/API');

const item = [
  {
    type: 'input',
    message: 'what is the item name?',
    name: 'thing',
  },
];

const options = [
  {
    type: 'list',
    message: 'what would you like to do next',
    choices: ['Item Info', 'Recipe Info', 'End'],
    name: 'options',
  },
];

// const loop = async (thingy) => {
//   console.log(`thingy`, thingy);

// };

const test = async (info) => {
  const a = await API.items(info.Results[0].ID);
  console.log(`a`, a);
};

const rInfo = async (info) => {
  const a = await API.items(info.Results[0].ID);
  //   console.log(`a`, a.Recipes);
  const b = await API.recipe(a.Recipes[0].ID);
  loop(b);
};

const question = async () => {
  try {
    const answer = await inquirer.prompt(item);
    const ping = await API.itemInfo(answer.thing);
    const next = await inquirer.prompt(options);
    switch (next.options) {
      case 'Item Info':
        test(ping);
        break;
      case 'Recipe Info':
        rInfo(ping);
        break;
      case 'End':
        break;
      default:
        throw new Error('end');
    }
  } catch (err) {
    console.log(`err`, err);
  }
};

question();
