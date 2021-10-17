import { PriorityQueue, QueueNode } from "../../types";

/*
Time complexity of the methods of priorityQueue:
	insert		O(log n)
	peek		O(1)
	pop			O(log n)
	size		O(1)
	isEmpty		O(1)
*/


export const priorityQueue = <T>(): PriorityQueue<T> => {
	let heap: QueueNode[] = [];
	
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
		isEmpty: () => heap.length === 0,

		peek: () => heap.length === 0 ? null : heap[0].value,
		
		size: () => heap.length,

		insert: (item, heuristic, depth) => {
			heap.push({key: heuristic + depth, value: item, depth: depth});
			let i = heap.length -1;

			while (i > 0) {
			  const p = parent(i);
			  if(heap[p].key < heap[i].key) break;

			  const tmp = heap[i];
			  heap[i] = heap[p];
			  heap[p] = tmp;
			  i = p;
			}
		},

		pop: () => {
			swap(0, heap.length - 1);
			const item = heap.pop() as QueueNode;
			let current = 0;

			while (hasLeft(current)) {
				let smallerChild = left(current);
				if (hasRight(current) && heap[right(current)].key < heap[left(current)].key) {
					smallerChild = right(current)
				}
		
				if (heap[smallerChild].key > heap[current].key) break;
		
				swap(current, smallerChild);
				current = smallerChild;
			}
	  
			return item;
		}
	}	  
}