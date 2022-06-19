import { BSTNode } from './Node';
import { Stack } from './Stack';

export const preOrder = (root: BSTNode, callback: (node: BSTNode) => void) => {
    const stack = new Stack<BSTNode>();
    if (root) {
        stack.push(root);
    }

    while (stack.size > 0) {
        const node = stack.pop();
        if (node) {
            callback(node);

            if (node.right) {
                stack.push(node.right);
            }
            if (node.left) {
                stack.push(node.left);
            }
        }
    }
};
