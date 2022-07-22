function existsInArray(
  array: Array<any>,
  searchParameter: string | number | Object | Array<any> | any,
): boolean {
  const is = array.includes(searchParameter);
  return is;
}

function getThisInArray(
  array: Array<any>,
  searchElement: string | number | any,
  TypeElement: any,
): any {
  const elementFound = array.find(
    (element: typeof TypeElement) => element === searchElement,
  );
  return elementFound;
}

export { existsInArray, getThisInArray };
