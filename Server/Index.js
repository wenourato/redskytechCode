import React from "react";
// import {Sequelize} from "sequelize/types";
// import sequelize from "express";
const PORT = process.env.PORT || 3500
const express = require("express");
const cors = require("cors");
require("dotenv").config()
const app = express()


app.get("/api/users?page=2", async(req,res) => {
    const {first_name, last_name, email, avatar} = req.body;

    let user = {
        first_name,
        last_name,
        email,
        avatar,
    };
    res.status(200).send(user);


})
    app.delete("/api/users?page=2/:id", async(req, res) => {

        let user = {
            first_name,
            last_name,
            email,
            avatar,
        };
        res.status(200).send(user)

    })
    .catch((err) => console.log(err))

