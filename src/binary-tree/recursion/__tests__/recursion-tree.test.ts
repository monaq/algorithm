import { BSTNode } from '../Node';

describe('Binary Search Tree (재귀)', () => {
    let node: BSTNode;
    beforeEach(() => {
        node = new BSTNode(5, {
            left: new BSTNode(4, {
                left: new BSTNode(3, { left: new BSTNode(2, {}) }),
            }),
            right: new BSTNode(7, { left: new BSTNode(6, {}) }),
        });
    });

    test('중위순회', () => {
        const inOrder: number[] = [];
        node.inOrder((node) => inOrder.push(node.data));

        expect(inOrder).toEqual([2, 3, 4, 5, 6, 7]);
    });

    test('전위순회', () => {
        const preOrder: number[] = [];
        node.preOrder((node) => preOrder.push(node.data));

        expect(preOrder).toEqual([5, 4, 3, 2, 7, 6]);
    });

    test('후위순회', () => {
        const postOrder: number[] = [];
        node.postOrder((node) => postOrder.push(node.data));

        expect(postOrder).toEqual([2, 3, 4, 6, 7, 5]);
    });
});
