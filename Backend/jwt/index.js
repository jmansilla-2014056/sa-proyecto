const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5001;
const cors = require('cors');
const context = '/esb/jwt';
//const router = require('./rutas/router');
const {executeQ,executeEPLogin} = require('./config/connection');
//app.set('llave', process.env.SECRET);
app.set('llave', 'c0ntr453ni4s3cr3t@')
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json({ extended: true, limit: '10mb' }));
//app.use(context, router);
app.listen(port, () => console.log(`${port}...`));

app.post('/esb/jwt/register', async  (req, res) => {
    //console.log("hola");
    var {email,id_user,id_rol,membership} = req.body;
    const payload = {
        id_user:id_user,
        id_rol:id_rol,
        membership:membership,
        email:email
    };
    
    const token = jwt.sign(payload, app.get('llave'), {
            expiresIn: 1440
    });
    //console.log(token);
    res.json({
        status:200,
        msj: 'Usuario Registrado',
        token: token
    });
});

app.post('/validate',(req,res)=>{
    const token_header = req.headers['authorization'];
    //const token = token_header.replace('Bearer','').replace(' ','');
    if (token_header) {
        jwt.verify(token_header, app.get('llave'), (err, decoded) => {      
          if (err) {
            return res.json({ 
                status:400,
                data: [],
                valido: false
            });
          } else {
            req.decoded = decoded;
            res.send({
                status:200,
                valido:true,
                data:decoded,
            });
          }
        });
      } else {
        res.send({ 
            status:400,
            valido:false,
            msj: 'Token no proveída.' 
        });
      }

});