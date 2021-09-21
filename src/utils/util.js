export function findObjectIndexByProperty(array, propertyName, propertyValue) {
  for (let i = 0; i < array.length; i++) {
    const object = array[i];
    if (object[propertyName] === propertyValue) {
      return i;
    }
  }
  return -1;
}
