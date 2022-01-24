const express = require('express');
const cors = require('cors');


class Server {
    conn = require('../database/config');

    constructor() {
        this.app = express();

        //Endpoints
        this.marvel = '/api/marvel'; // este es nuestro endpoint del marvel!
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
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Esta app esta corriendo en el puerto ${process.env.PORT}`);
        })
    }
}


module.exports = Server;