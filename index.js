const { program } = require('commander');

program
  .option('-x, --xxx', 'what the x')
program
  .command('add <taskName...>')
  .description('add a task')
  .action((args) => {
    const words = args.join(' ')
    console.log(words);
  });
program
  .command('clear')
  .description('clear all task')
  .action((args) => {
    console.log('this is clear')
  });

program.parse(process.argv);

const options = program.opts()

console.log(options.xxx)
