export class TrieNode {
    char: string = '';
    children: Map<string, TrieNode> = new Map();
    isEnd = false;

    constructor(char?: string) {
        if (char) {
            this.char = char;
        }
    }
}
