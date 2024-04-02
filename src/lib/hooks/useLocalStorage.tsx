interface UseLocalStorageState<T> {
  setValue: (key: string, value: T) => void;
  getValue: (key: string) => T;
  clearValue: (key: string) => void;
}

const useLocalStorage = <T,>(): UseLocalStorageState<T> => {
  const setValue = (key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getValue = (key: string): T => {
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  };

  const clearValue = (key: string) => {
    localStorage.removeItem(key);
  };

  return {
    getValue,
    setValue,
    clearValue,
  };
};

export default useLocalStorage;
