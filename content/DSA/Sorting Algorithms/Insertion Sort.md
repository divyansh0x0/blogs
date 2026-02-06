---
title: "Insertion Sort"
description: "A very crude overview of insertion sort"
---

## Algorithm

1. Consider the left-most element of the array to form a sorted sequence of length one.
2. Examine the next element in the array.
3. Compare this element with the elements of the sorted sequence, proceeding from right to left.
4. Shift each element of the sorted sequence one position to the right until the correct position for the examined element is obtained.
5. Insert the examined element into this position, thereby extending the sorted sequence by one element.
6. Repeat Steps 2–5 for each remaining element of the array, moving from left to right.
7. Terminate when all elements have been examined and the entire array is sorted.

```python
def InsertionSort(array: list[int | float]) -> list[int | float]:
    if len(array) < 2:
        return array
    for i in range(1,len(array)):
        key = array[i]
        j = i - 1  # store previous index
        while j >= 0 and array[j] > key:
            array[j + 1] = array[j]  # right shift
            j -= 1
        array[j+1] = key    

    return array
```