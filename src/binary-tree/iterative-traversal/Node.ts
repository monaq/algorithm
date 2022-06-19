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
}
