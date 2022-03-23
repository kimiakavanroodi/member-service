import Joi from "joi";
const { optional, array } = require("joi");

// new member schema for request body
module.exports.newMemberSchema = Joi.object({
    member_id: Joi.string().required(),
    invitation: {
        is_invited: Joi.boolean().required(),
        member_id: Joi.string().optional()
    }
})

