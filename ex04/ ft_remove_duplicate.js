function removedupli(array) {
    return Array.from(new Set(array));
  }
  
  const array = [1, 2, 3, 3, 4, 4, 4, 5];
  const result = removedupli(array);
  console.log(result); 