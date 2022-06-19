import { TrieNode } from './Node';

export class Trie {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }
    insert(word: string) {
        let current: TrieNode = this.root;

        for (let char of word) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode(char));
            }

            current = current.children.get(char)!;
        }

        current.isEnd = true;
    }
    search(word: string) {
        let current = this.root;

        for (let char of word) {
            if (!current.children.has(char)) return false;

            current = current.children.get(char)!;
        }

        return current.isEnd;
    }
}
