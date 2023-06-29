import { useState } from "react";

type Props = {
  key: string;
  initialValue: object | string | number | boolean;
}

export const useLocalStorage = ({key, initialValue}:Props) => {

  const [storedValue, setStoredValue] = useState(initialValue)

  const getItemValue = () => {
    try {
      const item = localStorage.getItem(key);
      const newValue = item ? JSON.parse(item) : initialValue;
      setStoredValue(newValue);
      return newValue;
    } catch (error) {
      console.log(error);
      setStoredValue(initialValue);
      return initialValue;
    }
  }

  const setItemValue = (value: object | string | number | boolean) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    getItemValue,
    setItemValue,
    storedValue
  }
}