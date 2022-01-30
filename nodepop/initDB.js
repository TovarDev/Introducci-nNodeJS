'use strict'

const dbConnection = require('./lib/connectMongoose');
const jasonAnuncios = require('./initDB.anuncios.json');

const Anuncio = require('./models/Anuncio');

async function main() {
    await initAnuncios();
    dbConnection.close();
}

main().catch(err => console.log ('Error', err));

async function initAnuncios() {
    const borrados = await Anuncio.deleteMany();
    console.log(`Eliminados ${borrados.deletedCount} anuncios`);

    const anuncios = await Anuncio.insertMany(jasonAnuncios);
    console.log(`Creados ${anuncios.length} anuncios.`);

}