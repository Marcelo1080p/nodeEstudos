const express= require('express');
const checkListRouter = require('./Route/src/Routes/checkList');

const app = express();
app.use(express.json());

app.use('/checklists', checkListRouter);

app.listen(3000, () => console.log("Servidor iniciado"));