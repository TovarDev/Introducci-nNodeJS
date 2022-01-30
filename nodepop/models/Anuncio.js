'use strict'

const mongoose = require('mongoose');

const anuncioSchema = mongoose.Schema({
    nombre: { type : String, index:true},
    venta: { type : Boolean, index:true},
    precio: { type: Number, min: 0, index: true},
    foto: { type : String, index:true},
    tags: { type : [String], index:true},
});

anuncioSchema.statics.lista = function(filtros, skip, select, sort, limit) {
    const query =  Anuncio.find(filtros);
    query.skip(skip);
    query.select(select);
    query.sort(sort);
    query.limit(limit);

    return query.exec();
}

const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;