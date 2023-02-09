const process = require( 'process' );


console.log("Digite o seu nome: ")
process.stdin.on( 'data', ( keyborad ) => {
    process.stdout.write(`Texo do Usuário: ${keyborad}`);
    process.exit();
})