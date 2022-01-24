// const fetch = require('node-fetch');
const axios = require("axios");

// Bring all the hero!
const getMarvelAll = async(req, res) => {
    try {
        const response = await axios({
            url: "https://gateway.marvel.com:443/v1/public/characters?limit=78&ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b",
            method: "get",
        });
        res.status(200).json(response.data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err });
    }
};

// Get a hero by id

const getHeroById = async(req, res) => {
    const { id } = req.params;

    try {
        const response = await axios({
            url: `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b`,
            method: "get",
        });
        res.status(200).json(response.data);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err,
        });
    }
};

module.exports = {
    getMarvelAll,
    getHeroById,
};