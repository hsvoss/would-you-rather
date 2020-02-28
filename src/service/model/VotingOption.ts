export default class VotingOption {
    public userVotedFor: string[];
    public text: string;

    constructor(userVotedFor: string[], text: string) {
        this.userVotedFor = userVotedFor;
        this.text = text;
    }

    public getTotalVotes = () => {
        return this.userVotedFor.length;
    };

    public hasUserVotedForThis = (userId: string): boolean => {
        return this.userVotedFor.includes(userId);
    };


}