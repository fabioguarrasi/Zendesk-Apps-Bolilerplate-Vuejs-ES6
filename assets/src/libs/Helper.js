export function getObjProperty(object, propertyName) {
  return propertyName.split('.').reduce((a, b) => a[b], object);
}
