import { useState, useCallback } from 'react';

export type InputStatus = 'default' | 'success' | 'error' | 'warning';

interface UseInputResult {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  status: InputStatus;
  setStatus: React.Dispatch<React.SetStateAction<InputStatus>>;
  reset: () => void;
  bindings: {
    value: string;
    status: InputStatus;
    onChangeText: (text: string) => void;
  };
}

const useInput = (initialValue: string = ''): UseInputResult => {
  const [value, setValue] = useState(initialValue);
  const [status, setStatus] = useState<InputStatus>('default');

  const onChangeText = useCallback((text: string) => {
    setValue(text);
  }, []);

  const reset = useCallback(() => {
    setValue(initialValue);
    setStatus('default');
  }, [initialValue]);

  return {
    value,
    setValue,
    status,
    setStatus,
    reset,
    bindings: {
      value,
      status,
      onChangeText,
    },
  };
};

export default useInput;
