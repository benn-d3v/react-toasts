import { createContext, useContext } from "react";
import toast, { Toaster } from 'react-hot-toast';

const ToastContext = createContext();
export default ToastContext;

export function ToastContextProvider({ children }) {

  const addSuccessToast = (message) => toast.success(message);
  const addErrorToast = (message) => toast.error(message);

  return (
    <ToastContext.Provider value={[addErrorToast, addSuccessToast]}>
      {children}
      <Toaster position="bottom-center" />
    </ToastContext.Provider>
  );
}

export function useToastContext() {
  return useContext(ToastContext);
}
