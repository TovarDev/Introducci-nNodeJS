'use strict'

const express = require('express');
const { json } = require('express/lib/response');
const createError = require('http-errors');
const { MongoInvalidArgumentError } = require('mongoose/node_modules/mongodb');
const Anuncio = require('../../models/Anuncio');

const router = express.Router();


router.post('/', async (req, res, next) => {
    try {
        const datosAnuncio = req.body;

        const anuncio = new Anuncio(datosAnuncio);
      
        const anuncioGuardado = await anuncio.save();

        res.status(201).json({ result: anuncioGuardado });

    }   catch (err) {
        next(err);        
    }
});


router.get('/', async (req, res, next) => {
    try {
        const nombre = req.query.nombre;
        const precio = req.query.precio;
        const tags = req.query.tags;
        const venta = req.query.venta;
        const skip = req.query.skip;
        const select = req.query.select;
        const sort = req.query.sort;
        const limit = req.query.limit;

        const filtros = {};
        
        
        if (nombre) {
            filtros.nombre = new RegExp('^' + req.query.nombre, "i");
        }

        if (precio === '10-50') {
            filtros.precio = { precio: { '$gte': '10', '$lte': '50' } };
        }

        if (tags) {
            filtros.tags = tags;
        }

        if (venta) {
            filtros.venta = venta;
        }

        if (select) {
            filtros.select = select;
        }

        if (sort) {
            filtros.sort = sort;
        }

        if (limit) {
            filtros.limit = limit;
        }

        const anuncios = await Anuncio.lista(filtros, skip, select, sort, limit);
        res.json({ results: anuncios })
        
    
    }   catch (err) {
        next(err);
        
    }
});


module.exports = router;