import { useState, useEffect } from 'react';

function useWidth() {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState(undefined);
  useEffect(() => {
    let timeoutId = null;
    // Handler to call on window resize
    function handleResize() {
      // Set window width to state
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWindowSize(window.innerWidth), 150);
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default useWidth