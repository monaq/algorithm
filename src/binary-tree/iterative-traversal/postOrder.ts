import { BSTNode } from './Node';
import { Stack } from './Stack';
export const postOrder = (root: BSTNode, callback: (node: BSTNode) => void) => {
    if (!root) return;
    const stack = new Stack<BSTNode>();
    const out = new Stack<BSTNode>();
    let curr: BSTNode | undefined;
    stack.push(root);

    while (stack.size > 0) {
        curr = stack.pop();

        if (curr) {
            out.push(curr);
        }

        if (curr?.left) {
            stack.push(curr.left);
        }
        if (curr?.right) {
            stack.push(curr.right);
        }
    }

    while (out.size > 0) {
        callback(out.pop()!);
    }
};
