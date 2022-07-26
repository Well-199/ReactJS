const chalk = require('chalk')
const fs = require('fs')

function getFile(filePath){
  const encoding = 'utf-8'
  fs.readFile(filePath, encoding, (_, text) => {
    console.log(chalk.green(text))
  })
}

getFile('./arquivos/texto1.md')
