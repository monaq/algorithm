import { Trie } from '../Trie';

describe('trie', () => {
    let trie: Trie;
    beforeEach(() => {
        trie = new Trie();
    });

    test('search success', () => {
        trie.insert('CAT');
        trie.insert('JS');

        expect(trie.search('CAT')).toBeTruthy();
        expect(trie.search('JS')).toBeTruthy();
    });
    test('search failure', () => {
        trie.insert('CAT');
        trie.insert('JS');

        expect(trie.search('DOG')).toBeFalsy();
        expect(trie.search('JAVA')).toBeFalsy();
    });
});
