class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  add(node) {
      if (node.value > this.value){
          if( this.right === null){
              this.right = node;
          } else {
              this.right.add(node);
          }
      } else {
          console.log('im in the left branch!!!!!');
          if( this.left === null){
              this.left = node;
          } else {
              this.left.add(node);
          }
      }
  }
}
class BinaryTree {
  constructor(value) {
    this.root = new BinaryTreeNode(value);
  }
}
const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');
B.add(A);
console.log(B);
B.add(D);
console.log(B);
B.add(C);
console.log(B);
module.exports = { BinaryTree, BinaryTreeNode };