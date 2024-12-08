import React from 'react';
import { ToastContext } from '../Contexts'

function ToastProvider({children}) {
  const [toastStack, setToastStack] = React.useState([]);

  React.useEffect(() => {
    function handleKeyDown(e){
      let code = e.code;
      if(code == 'Escape'){
        setToastStack([]);
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      return window.removeEventListener("keydown", handleKeyDown);
    }
  }, [])

  function addToast(toastMessage, selectedVariant){
    const newToastStack = [...toastStack];
    newToastStack.push({
      id: crypto.randomUUID(),
      message: toastMessage,
      variant: selectedVariant
    });

    setToastStack(newToastStack)
  }

  function dismissToastById(id) {
    let newToastStack = [...toastStack];
    newToastStack = newToastStack.filter(toast => toast.id != id);
    setToastStack(newToastStack)
  }

  const toastVal = { toastStack, addToast, dismissToastById };

  return <ToastContext.Provider value={toastVal}>{children}</ToastContext.Provider>
}

export default ToastProvider;
