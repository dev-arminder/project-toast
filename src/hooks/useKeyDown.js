import React from "react";

function useKeyDown(key, callback) {
   React.useEffect(() => {
      function handleKeyDown(event) {
         if (event.target.code === key) {
            callback(event);
         }
      }
      window.addEventListener('keydown', handleKeyDown);

      return () => { window.removeEventListener('keydown', handleKeyDown); }
   })
}

export default useKeyDown;