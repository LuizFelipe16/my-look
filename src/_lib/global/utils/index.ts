export * from './array';
export * from './hexColors';

export function stringParse(s: string) {
  return JSON.parse(JSON.stringify(s))
}

export function isEmptyObject(vefObj: Object) {
  return vefObj !== null ? Object.keys(vefObj).length === 0 : false
}