const express = require('express');
const cors = require('cors');


class Server {
    conn = require('../database/config');

    constructor() {
        this.app = express();

        //Endpoints
        this.marvel = '/api/marvel'; // este es nuestro endpoint del marvel!
        this.getColor = '/api/color';
        this.postColor = '/api/color';
        this.conn();


        // Middlewares
        this.middlewares();


        // Rutas 
        this.routes();
        this.listen();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }


    routes() {
        this.app.use(this.marvel, require('../routes/marvel'));
        this.app.use(this.getColor, require('../routes/color'));
        this.app.use(this.postColor, require('../routes/color'));
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Esta app esta corriendo en el puerto ${process.env.PORT}`);
        })
    }
}


module.exports = Server;