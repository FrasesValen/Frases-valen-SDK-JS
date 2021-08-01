type Badge = "broadcaster" | "mod" | "vip" | "verified" | "sub";

let allBadges: Badge[] = ['broadcaster', 'mod', 'vip', 'verified', 'sub'];

class User {
    constructor(data: Partial<User>){
        (<any>Object).assign(this, data);
        if(!data.badges) this.badges = [];
        allBadges.forEach((badge: Badge) => {
            if(data[badge]){
                this.badges.push(badge);
            }
            delete this[badge];
        })
    }

    public display_name!: String
    public profile_pic!: String | null
    public twitch_userid!: Number
    public points!: Number
    public badges!: Array<Badge>


    /**
     * @deprecated Use 'badges' property instead.
     */
    public verified?: boolean
    /**
     * @deprecated Use 'badges' property instead.
     */
    public mod?: boolean
    /**
     * @deprecated Use 'badges' property instead.
     */
    public vip?: boolean
    /**
     * @deprecated Use 'badges' property instead.
     */
    public sub?: boolean
    /**
     * @deprecated Use 'badges' property instead.
     */
    public broadcaster?: boolean
}

export default User;