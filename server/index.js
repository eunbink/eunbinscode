const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use( bodyParser.json() );

const videoUrls = {
    video1:'gIBzTZv6l3I',
    video2:'wiPD9X43knU',
    video3:'ytcEmtee2OE',
    video4:'RsND0vLvw_8',
    video5:'tIBgriXHak8',
    video6:'qZkuyLsN3gM',
    video7:'b9aAIY8zMpg',
    video8:'Mv6ktjg_RPk',
    video9:'FJdNdMOblaM',
    video10:'e0A9nU6ce7w', 
    video11:'heos3UtMX0s',
    video12:'PSTOWstqJNo'
}

app.get('/api/getvideos/' , function (req,res){
    res.send(videoUrls)
})





const port = 4000;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );


