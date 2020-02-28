export default class VotingOption {
    public userVotedFor: string[];
    public text: string;

    constructor(userVotedFor: string[], text: string) {
        this.userVotedFor = userVotedFor;
        this.text = text;
    }


}

export function hasUserVotedForThis(votingOption: VotingOption, userId: string) {
    return votingOption.userVotedFor.includes(userId);
}

export function getTotalVotes(votingOption: VotingOption) {
    return votingOption.userVotedFor.length;
}