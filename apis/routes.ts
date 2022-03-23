import express from "express";

const { memberRoutes } = require('./member/MemberAPIs.ts')

module.exports = function(app: express.Application) {
    app.use(express.json());

    app.post('/members', memberRoutes.createNewMember);

}