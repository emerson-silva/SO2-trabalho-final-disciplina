/////////////////////////////////////////////////////////////////////////
//////////////////////////////// NGINX //////////////////////////////////
const port =  process.argv[2] || 8000;
const hostname = '127.0.0.1';

const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/test/:num', (req, res) => {
    getTest(req.params['num']).then(result => {
        res.send(result);
    })
});

app.listen(port, () => console.log('Server listening on port ' + port));

/////////////////////////////////////////////////////////////////////////
/////////////////////////////// DEFAULT /////////////////////////////////

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
