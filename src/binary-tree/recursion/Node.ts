export class BSTNode {
    data: any;
    left?: BSTNode;
    right?: BSTNode;
    constructor(
        data: any,
        { left, right }: { left?: BSTNode; right?: BSTNode }
    ) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    inOrder(callback: (node: BSTNode) => void) {
        this.left && this.left.inOrder(callback);
        callback(this);
        this.right && this.right.inOrder(callback);
    }
    preOrder(callback: (node: BSTNode) => void) {
        callback(this);
        this.left && this.left.preOrder(callback);
        this.right && this.right.preOrder(callback);
    }
    postOrder(callback: (node: BSTNode) => void) {
        this.left && this.left.postOrder(callback);
        this.right && this.right.postOrder(callback);
        callback(this);
    }
}
