"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'animales',
    port: '3306'
});
connection.connect(function (error) {
    if (error)
        throw error;
    else
        console.log("conexion exitosa");
});
const router = express_1.Router();
router.post('/api/animales', (req, res) => {
    connection.query('insert into perro ( nombre, fecha) values(?,?)', [req.body.nombre, req.body.fecha], function (error, resultado) {
        if (error)
            throw error;
        else {
            res.json({
                mensaje: 'perro creado'
            });
        }
    });
});
router.get('/api/animales', (req, res) => {
    connection.query('select * from perro', function (error, resultado) {
        if (error)
            throw error;
        else {
            res.json({
                mensaje: resultado
            });
        }
    });
});
//Fechas  /////
router.get('/api/animales/:F1/:FF', (req, res) => {
    connection.query('select * from perro where perro.fecha BETWEEN' + "'" + req.params.F1 + "'" + ' AND ' + "'" + req.params.FF + "'", function (error, resultado) {
        if (error)
            throw error;
        else {
            res.json({
                mensaje: resultado
            });
        }
    });
});
//Fechas //////
router.get('/mensajes', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'Get Ok'
    });
});
router.post('/mensajes', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    res.json({
        ok: true,
        cuerpo,
        de
    });
    // cuerpo:cuerpo
});
router.delete('/mensajes/:id', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;
    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });
    // cuerpo:cuerpo
});
exports.default = router;
