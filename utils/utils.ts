export const getStorageItem = function getStorageItem(type: string):
 null | string {
  if (typeof window !== 'undefined') {
    const savedData: string = localStorage.getItem(type) || '';
    return savedData;
  }
  return null;
};

export const setStorageItem = function setStorageItem(
  type: string,
  newData: any,
): void {
  if (typeof window !== 'undefined') localStorage.setItem(type, newData);
};
