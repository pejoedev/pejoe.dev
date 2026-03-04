export interface homescreenLetter {
    text: string;
    ignoreSpanInsertion?: boolean
}

export const possibleLetters: homescreenLetter[] = [
    {
        text: `<span>I found a letter, "Dear future me
I promise I'll take care of the person we'll both be eventually
I'll pick up painting, oh, oh, and I'll join the gym"
I can't shake the feeling that I'll be happy by the time I'm him</span>`,
        ignoreSpanInsertion: true
    }
]