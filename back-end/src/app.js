const express = require("express")

class App {
    constructor(){
        this.server = express()
    }

    Middlewares(){

    }
}

module.exports = new App().server