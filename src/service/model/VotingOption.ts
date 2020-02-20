export default class VotingOption {
    public userVotedFor: string[];
    public text: String;

    constructor(userVotedFor: string[], text: String) {
        this.userVotedFor = userVotedFor;
        this.text = text;
    }

    public getTotalVotes = () => {
        return this.text.length;
    }
}