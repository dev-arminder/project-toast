import React from 'react';
import { ToastContext } from '../Contexts';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {

  const { toastStack, dismissToastById } = React.useContext(ToastContext)

  console.log('Toast Shelf Rendered')
  return (
    toastStack.length > 0 && (<ol className={styles.wrapper}>
      {toastStack.map(({ id, message, variant }) => (<li className={styles.toastWrapper} key={id}>
        <Toast type={variant} handleDismiss={dismissToastById} id={id}>{message}</Toast>
      </li>))}
    </ol>)
  );
}

export default ToastShelf;
