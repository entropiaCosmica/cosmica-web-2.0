import { useState, useEffect } from 'react';

const hasWindow = typeof window !== "undefined"

const getWidth = () => {
  const windowWidth = hasWindow ? window.innerWidth : null
  return windowWidth
}

function useCurrentWidth() {
  let [width, setWidth] = useState(getWidth());
  useEffect(() => {
    let timeoutId = null;
    if (hasWindow) {
      const resizeListener = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => setWidth(getWidth()), 150);
      };
      window.addEventListener('resize', resizeListener);
      return () => {
        window.removeEventListener('resize', resizeListener);
      }
    }
  }, [])
  return width;
}

export default useCurrentWidth