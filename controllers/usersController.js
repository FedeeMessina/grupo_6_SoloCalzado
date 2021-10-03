var path = require('path');
const formularioData = require('./formulariosData');

const controller = {

    login: (req, res) => {
        return res.render('users/login', {formularioData: formularioData[0]});
    },

    register: (req, res) => {
        return res.render('users/login', {formularioData: formularioData[1]});
    },

    register2: (req, res) => {
        return res.render('users/register');
    },

    error: (req, res) => {
        res.send("error");
    },      
}

module.exports = controller;