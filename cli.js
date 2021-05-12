const program = require('commander');
const api = require('./index')

program
  .option('-x, --xxx', 'what the x')
program
  .command('add')
  .arguments('[task...]')
  .description('add a task')
  .action((...args) => {
    const words = args[0].join(' ')
    api.add(words)
  });
program
  .command('clear')
  .description('clear all task')
  .action((args) => {
    console.log('this is clear')
  });

program.parse(process.argv);

const options = program.opts()
