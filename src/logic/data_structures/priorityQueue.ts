import { PriorityQueue, QueueNode } from "../../types";

/*
Time complexity of the methods of priorityQueue:
	insert		O(log n)
	peek		O(1)
	pop			O(log n)
	size		O(1)
	isEmpty		O(1)
The low time complexities have been achieved by representing the
queue as a binary tree, allowing for reaching children and parent nodes
based on simple math shortcuts
*/

export const priorityQueue = <T>(): PriorityQueue<T> => {
	let heap: QueueNode[] = [];
	
	// math shortcuts to retrieve proper parent and children nodes
	const parent = (index: number) => Math.floor((index - 1) / 2);
	const left = (index: number) => 2 * index + 1;
	const right = (index: number) =>  2 * index + 2;
	const hasLeft = (index: number) => left(index) < heap.length;
	const hasRight = (index: number) => right(index) < heap.length;
	
	const swap = (a: number, b: number) => {
		const tmp = heap[a];
		heap[a] = heap[b];
		heap[b] = tmp;
	}
	
	return {
		// push the new item into the end of the tree (lowest priority) and sort all elements
		// based on comparing current key value with parent, starting from the bottom of the tree
		insert: (item, heuristic, depth, direction) => {
			heap.push({key: heuristic + depth, value: item, depth: depth, direction: direction});
			let i = heap.length - 1;

			while (i > 0) {
			  const p = parent(i);
			  if (heap[p].key < heap[i].key) break;

			  // if the parent has the same value as the child, check depth to ensure that
			  // the lower depth (closer to the goal) is favored when popping (informed algorithms preference)
			  if (heap[p].key === heap[i].key && heap[p].depth < heap[i].depth) break;

			  const tmp = heap[i];
			  heap[i] = heap[p];
			  heap[p] = tmp;
			  i = p;
			}
		},

		pop: () => {
			// move the root (highest priority) to the right down corner of the tree, 
			// also meaning the top of the stack (lowest priority), to pop it
			swap(0, heap.length - 1);
			const itemToPop = heap.pop() as QueueNode;
			let current = 0;

			// sort all elements that remain by swaping the current node with its smallest child
			// starting from the root, in case of draw favor the one closer to the initial state (lower depth)
			while (hasLeft(current)) {
				let smallerChild = left(current);

				if((hasRight(current) && heap[right(current)].key < heap[left(current)].key)
				|| (hasRight(current) && heap[right(current)].key === heap[left(current)].key && heap[right(current)].depth < heap[left(current)].depth)) {
					smallerChild = right(current);
				}
		
				if (heap[smallerChild].key > heap[current].key) break;
				if (heap[smallerChild].key === heap[current].key && heap[smallerChild].depth > heap[current].depth) break;
		
				swap(current, smallerChild);
				current = smallerChild;
			}
	  
			return itemToPop;
		},

		isEmpty: () => heap.length === 0,

		peek: () => heap.length === 0 ? null : heap[0].value,
		
		size: () => heap.length,
	}	  
}