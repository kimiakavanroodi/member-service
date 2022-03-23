import express from "express"

const MemberServiceClass = require('../../services/members/MemberService.ts')
const { newMemberSchema } = require('../../models/NewMember.ts')
const { getClient } = require("../../config/DiscordDB.ts")

const createNewMember = async(req: express.Request, res: express.Response) => {
    const memberBody = req.body;
    const db_discord = await getClient;

    const { error, value } = newMemberSchema.validate(memberBody);

    if (error) {

        res.status(400).send(error.message)

    } else {

        const memberHandler = new MemberServiceClass(db_discord);
        const addedMember = await memberHandler.addNewMember(memberBody);

        if (addedMember != null) {
            res.status(200).send({ member : addedMember })
        } else {
            res.status(500).send({ member : [] })
        }
    }
}

module.exports.memberRoutes = {
    "createNewMember": createNewMember
}
