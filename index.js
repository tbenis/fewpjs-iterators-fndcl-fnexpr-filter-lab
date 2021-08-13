// Code your solution here

let findMatching = (driversArr, str) => {
  const matched = driversArr.filter(d => d.toLowerCase() === str.toLowerCase());
  return matched;
}

let fuzzyMatch = (driversArr, str) => {
  const matched = driversArr.filter(d => d.startsWith(str));
  return matched;
}

let matchName = (driversArr, str) => {
  const matched = driversArr.filter(d => d.name.toLowerCase() === str.toLowerCase());
  return matched;
}
