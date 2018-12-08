/////////////////////////////////////////////////////////////////////////
/////////////////////////////// SIMPLES /////////////////////////////////

//Pega o numero da porta passado no start do processo (default: 8000)
const port =  process.argv[2] || 8000;

//cria servidor express
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    getTest(20000).then(result => {
        res.send(result);
    })
});

app.listen(port, () => console.log('Server listening on port ' + port));

var getTest = function (num) {
    return new Promise (function (resolve, reject) {
        let loopCount = num;
        while (loopCount>0) {
            let internalLoopCount = loopCount;
            while (internalLoopCount>0) {
                internalLoopCount--;
            }
            loopCount--;
        }
        resolve('Success');
    });
}
