
export interface MemberBody {
    member_id: string,
    invitation: {
        is_invited: boolean
        member_id: string
    }
}