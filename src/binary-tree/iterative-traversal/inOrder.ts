import { BSTNode } from './Node';
import { Stack } from './Stack';

export const inOrder = (root: BSTNode, callback: (node: BSTNode) => void) => {
    const stack = new Stack<BSTNode>();
    let curr: BSTNode | undefined = root;
    // root -> left -> right
    while (curr || stack.size > 0) {
        if (curr) {
            stack.push(curr);
            curr = curr.left;
        } else {
            curr = stack.pop();
            callback(curr!);

            curr = curr!.right;
        }
    }
};
