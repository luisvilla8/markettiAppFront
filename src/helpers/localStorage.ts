export const getItemFromLG = (key: string) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const setItemToLG = (key: string, value: object | string | number | boolean) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return getItemFromLG(key)
  } catch (error) {
    console.log(error);
  }
}
