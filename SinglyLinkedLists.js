console.log("Node server bootup successful");

// This program creates the LinkedList Object that will 
// add a node to the beginning of a list Object. 

// Node function give bluePrint of each node 
function Node(value) {
	this.value = value; 
	this.next = null; 
}

// SinglyLinkedList function gives blueprint of the SLL Object
function SinglyLinkedList() {
	this.length = 0; 
	this.head = null; 
}

/*	The SinglyLinkedList prototype add method is used to build
the list object with individual nodes. the add method takes a value parameter  
If a list doesn't exist yet,it makes the new node the head of the SLL. 
If the list does exist,the new node will be added to the beginning of the
existing SLL. */
SinglyLinkedList.prototype.add = function(value) {
	var node = new Node(value); 
	var current = this.head; 
	//case 1: list doesn't exist
	if (!current) {
		this.head = node; 
		this.length++; 
	//case 2: list already exists	
	} else {
		current = node; 
		current.next = this.head; 
		this.head = current; 
		this.length++;
	}
};	

/* 	The SinglyLinkedList removeFront method is used to remove the 
first node from the list and replace the head of the list with the following 
node. If the list does not have any nodes, the function returns null.
If the first node is removed, and there isn't a following node to replace
the head of the list, the method will return null.*/
SinglyLinkedList.prototype.removeFront = function() {
	//case 1: list doesn't exist 
	if (!this.head) {
		return null; 
	//case 2: list does exist	
	} else {
		var firstNode = this.head; 
		this.head = firstNode.next; 
		firstNode = null; 
		//check if this.head exists
		if (!this.head) {
			return null; 
		}
	}
};

/*	The SinglyLinkedList contains method takes in a value parameter. It
then traverses the SLL comparing the input value to the value contained within 
every existing node. If the value is found, the method ends and returns a string that the
value was found.If the while loop ends, then the value was not found, and the 
method returns a string that the value was not found.*/
SinglyLinkedList.prototype.contains = function(value) {
	//assume the SLL exists
	var walker = this.head; 
	// traverse the list to search for value
	while (walker) {
		if (walker.value = value) {
			return "Value was found in SLL";
		}
		walker = walker.next; 
	}
	return "Value was not found in SLL"; 
};
 
//-------------------------the code below shows how the program is used---------                                                                   
// create a SinglyLinkedList instance
var list = new SinglyLinkedList(); 

// add nodes to build list
list.add(1); //{value: 1, next: node}
list.add(2); //{value: 2, next: node}
list.add(3);
// list.add(4);

// remove first node
list.removeFront();

// use the contains method to search for values in SLL
// create a var 'doesValExist' that will catch the return statement.
var doesValExist = list.contains(3); 
console.log(doesValExist); 

//traverse the list; 
console.log(list.head);
//console.log(list.head.next); 
