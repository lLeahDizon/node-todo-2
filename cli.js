#!/user/bin/env node
const program = require('commander')
const api = require('./index')

program
  .option('-x, --xxx', 'what the x')
program
  .command('add')
  .arguments('[task...]')
  .description('add a task')
  .action((...args) => {
    const words = args[0].join(' ')
    api.add(words).then(() => {console.log('添加成功')}, () => {console.log('添加失败')})
  })
program
  .command('clear')
  .description('clear all task')
  .action((args) => {
    api.clear().then(() => {console.log('清除完毕')}, () => {console.log('清除失败')})
  })

if (process.argv.length === 2) {
  // 说明用户直接运行 node cli.js
  void api.showAll()
}

program.parse(process.argv)

const options = program.opts()
