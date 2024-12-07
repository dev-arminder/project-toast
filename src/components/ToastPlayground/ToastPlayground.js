import React from 'react';
import Button from '../Button';
import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf';
import { ToastContext } from '../Contexts'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [toastMessage, setToastMessage] = React.useState('');
  const [selectedVariant, setSelectedVariant] = React.useState('notice');
  const { addToast } = React.useContext(ToastContext);


  function handleSubmit(e) {
    e.preventDefault();

    addToast(toastMessage, selectedVariant);
    setToastMessage('');
    setSelectedVariant('notice');
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />


      <form onSubmit={(e) => { handleSubmit(e) }}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea id="message" required className={styles.messageInput} value={toastMessage} onChange={(e) => { setToastMessage(e.target.value); }} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              {VARIANT_OPTIONS.map((variant) => {
                return (
                  <label htmlFor={`variant-${variant}`} key={variant}>
                    <input
                      id={`variant-${variant}`}
                      type="radio"
                      name="variant"
                      value={variant}
                      checked={selectedVariant === variant}
                      onChange={event => {
                        setSelectedVariant(event.target.value)
                      }}
                    />
                    {variant}
                  </label>

                )
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
