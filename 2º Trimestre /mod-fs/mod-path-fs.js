
const fs = require('fs')
const path = require('node:path')
const chalk = require('chalk').default

try {

    //        resultado        ler arquivo        caminho        arquivo        codificar
    //const arquivo = fs.readFileSync(path.join(__dirname+"/README.MD"), "utf-8")
    const arquivo = fs.readFileSync(path.resolve(__dirname + "/README.MD"), "utf-8")
    console.log(chalk.bgGreen.whiteBright('✅Arquivo carregado com sucesso!...:'))
    console.log(arquivo)
} catch (error) {
    console.error(chalk.bgRed.white(' ⚠️deu ruim...'))
    console.log(error.message)
}

