const Color = require('../models/heroe');

// Mostrar los colores
const getColor = async(req, res) => {

    try {
        const colores = await Color.find();

        const total = await Color.countDocuments();

        // Válidamos en caso  que no existan colores
        if (!colores) {
            return res.status(404).json({
                ok: false,
                msg: "No existen colores."
            })
        }


        // Respuesta del server con exito
        res.status(200).json({
            total,
            colores
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el server"
        })
    }

}


// Color By Id
const getColorById = async(req, res) => {

    try {
        const color = req.params.color.toUpperCase();
        const dbColor = await Color.findOne({ color });
        if (!dbColor) {
            return res.status(404).json({
                ok: false,
                msg: `El color ${color} no existe`
            })
        }

        res.status(200).json({
            ok: true,
            dbColor
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el server"
        })
    }
}


// Api para crear el color
const postColor = async(req, res) => {
    const color = req.body.color.toUpperCase();

    const colorDB = await Color.findOne({ color });

    if (colorDB) {
        return res.status(404).json({
            msg: `El color ${colorDB.color} ya existe`
        })
    }
    const data = new Color({ color });
    await data.save();


    res.json({
        ok: true,
        data
    })
}


module.exports = {
    getColor,
    postColor,
    getColorById
}