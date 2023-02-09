const express= require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Minha primeira lista de tarefas: </h1>')
});


app.get('/json', (req, res) => {
    res.json({"Obejtos": "Json"})
})

app.listen(3000, () => console.log("Servidor iniciado"));