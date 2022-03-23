import { MemberBody } from "../types/members/MemberType";

const WalletServiceClass = require('../wallets/WalletService.ts')

class MemberService {
    client: any
    transactionHandler: any;

    constructor(client: any) {
        this.client = client;
        this.transactionHandler = new WalletServiceClass(client);
    }

    addNewMember = async(member_info: MemberBody) : Promise<MemberBody>  => {
        const member_id = member_info.member_id;
        const invitation = member_info.invitation;

        const allMembers = await this.client.query("SELECT * FROM discord.members;") ;       
        var hasMember = allMembers.rows.some((v: { id: string; }, idx: number, arr: any) => v.id === member_id); // search for member Id in database

        // if it could not find a member
        if (!hasMember) {

            console.log("Adding the member to the db")
            const insertMember = async() => await this.client.query(`INSERT INTO discord.members (id) VALUES ('${member_id}');`);
            insertMember();   

            await this.transactionHandler.createTransaction(member_id, "debit", 2000, "why not");

            if (invitation.is_invited) {

                 await this.transactionHandler.createTransaction(invitation.member_id, "debit", 1000, "why not");

            }
        }
        return member_info

    }
}

module.exports = MemberService