const express= require('ex');
const checkListRouter = require('./Route/src/Routes/checkList');
const app = express();

app.use(express.json());
app.use('/checkListRouter', checkListRouter);

app.listen(3000, () => console.log("Servidor iniciado"));