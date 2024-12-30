function longest(strs: string[]) {
  let result: string = "";
  for (let i: number = 0; i < strs[0].length; i++) {
    let value: string = strs[0][i];
    for (let j: number = 1; j < strs.length; j++) {
      if (!strs[j][i] || strs[j][i] !== value) return result;
    }
    result += value;
  }
  return result;
}

console.log(longest(["flower", "flow", "flight"]));
