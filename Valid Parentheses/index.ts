function isValid(s: string) {
  const prakets: { [key: string]: string } = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let arr: string[] = [];
  for (let i = 0; i < s.length; i++) {
    for (const [key, value] of Object.entries(prakets)) {
      if (s[i] === key) {
        arr.push(s[i]);
      } else {
        if (i > 0) {
          if (arr[arr.length - 1] === value) {
            arr[arr.length - 1];
            arr.pop();
          } else {
            console.log(s[i - 1]);
            return false;
          }
        } else {
          break;
        }
      }
    }
  }
  if (arr.length === 0) {
    console.log(arr);
    return true;
  } else {
    console.log(arr);
    return false;
  }
}
