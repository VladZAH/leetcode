class Node {
    constructor (val, next) {
        this.val = (val === undefined) ? null : val;
        this.next = (next === undefined) ? null : next;
    }
}

let l1 = new Node(1);
l1.next = new Node(7);
l1.next.next = new Node(1);
l1.next.next.next = new Node(5)

console.log(l1)

let reverse = (list) => {
    let prev = null
    while(list){
        let next = list.next;
        list.next = prev;
        prev = list;
        list = next;
    }
    return prev
}

console.log(reverse(l1))
