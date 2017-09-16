const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use( bodyParser.json() );

const videoUrls = {
    video1:'leE10vdvkho',
    video2:'Z2QTd54yU5o',
    video3:'W4-BFmkPPt4',
    video4:'tFPlBXXuwis',
    video5:'iYPmR1nV0FU',
    video6:'W1fklW6lESw',
    video7:'ZmUaH-n_wbA',
    video8:'Ezf5vJgTTz0',
    video9:'tMY2EayKUBE',
    video10:'gIBzTZv6l3I' 
}

app.get('/api/videos/' , function (req,res){
    res.send(videoUrls)
})




const port = 4000;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );


