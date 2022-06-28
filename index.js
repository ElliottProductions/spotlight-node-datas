
class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
<<<<<<< HEAD
=======
    current.next = new Node(val);
  }
  removeTail(){
    let current = this.head;
    while (current.next.next){
      current = current.next;
    }
    current.next = null;
  }
>>>>>>> 9121b5a652f09a1b92659e22549008b87bc0ecd3

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

<<<<<<< HEAD
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
=======
const list = new LinkedList("A");
console.log(list.head);
list.add("B");
console.log(list.getList());
list.add("C");
list.add('D');
console.log(list.getList());
list.removeTail();
console.log(list.getList());
list.removeTail();
console.log(list.getList());
>>>>>>> 9121b5a652f09a1b92659e22549008b87bc0ecd3


  module.exports = { BinaryTree, BinaryTreeNode };