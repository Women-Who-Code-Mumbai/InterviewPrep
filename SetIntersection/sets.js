/*
 * Given a two dimensional array, find the set intersection of all the sub arrays
 */

let input = [
  [1, 2, 8, 9],
  [2, 4],
  [8, 2],
  [1, 7, 2]
];

// Find the index of the sub array containing the least number of elements
const findSmallestIndex = input => {
  let smallestIndex = -1;
  let smallestLength = 99999;

  for (let i = 0; i < input.length; i++) {
    let subarray = input[i];
    if (subarray.size < smallestLength) {
      smallestLength = subarray.size;
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

// convert the list of arrays to list of sets to remove duplicate items
const convertArrayToSets = () => {
  input = input.map(subarray => {
    return new Set(subarray);
  });
};

convertArrayToSets();
const smallestIndex = findSmallestIndex(input);

// copy the contents of the smallest set to a new result set
let resultSet = new Set(input[smallestIndex]);

// iterate over all the sub arrays
for (let i = 0; i < input.length - 1; i++) {
  const selectedSubset = input[i];

  //for each element in the result set, check if the sub set contains that element
  //if not, remove that element from the result set
  for (let element of resultSet) {
    if (!selectedSubset.has(element)) {
      resultSet.delete(element);
      continue;
    }
  }
}

console.log("result: ", resultSet);

// output -
// result:  Set { 2 }
