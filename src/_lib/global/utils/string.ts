
export type CapitalizeType = 'full' | 'first' | 'sentence';

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalizeFirstLetterInSentence(str: string) {
  const arr = str.split(" ");

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join(" ");
}

function capitalize(str: string = '', type: CapitalizeType = 'full') {
  if (type === 'full') {
    const newStr = str.toUpperCase();
    return newStr;
  } else if (type === 'first') {
    const newStr = capitalizeFirstLetter(str);
    return newStr;
  } else if (type === 'sentence') {
    const newStr = capitalizeFirstLetterInSentence(str);
    return newStr;
  } else {
    return str;
  }
}

export {
  capitalize
};
