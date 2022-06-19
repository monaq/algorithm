import { BSTNode } from '../Node';
import { inOrder } from '../inOrder';
import { postOrder } from '../postOrder';
import { preOrder } from '../preOrder';

describe('Binary Search Tree (반복)', () => {
    let given: BSTNode;
    beforeEach(() => {
        given = new BSTNode(5, {
            left: new BSTNode(4, {
                left: new BSTNode(3, { left: new BSTNode(2, {}) }),
            }),
            right: new BSTNode(7, { left: new BSTNode(6, {}) }),
        });
    });

    test('중위순회', () => {
        const result: number[] = [];
        inOrder(given, (node) => result.push(node.data));

        expect(result).toEqual([2, 3, 4, 5, 6, 7]);
    });

    test('전위순회', () => {
        const result: number[] = [];
        preOrder(given, (node) => result.push(node.data));

        expect(result).toEqual([5, 4, 3, 2, 7, 6]);
    });

    test('후위순회', () => {
        const result: number[] = [];
        postOrder(given, (node) => result.push(node.data));

        expect(result).toEqual([2, 3, 4, 6, 7, 5]);
    });
});
