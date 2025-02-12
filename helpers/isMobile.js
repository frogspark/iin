import { useState, useEffect } from "react";

export default function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Ensure the code only runs on the client
    if (typeof window !== "undefined") {
      // Create a media query that checks if the viewport is less than the breakpoint
      const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

      // Set the initial state based on the current viewport
      setIsMobile(mediaQuery.matches);

      // Define a handler that updates state when the media query status changes
      const handleMediaChange = (event) => {
        setIsMobile(event.matches);
      };

      // Modern browsers
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", handleMediaChange);
      } else if (mediaQuery.addListener) {
        // Fallback for older browsers
        mediaQuery.addListener(handleMediaChange);
      }

      // Cleanup the event listener on unmount
      return () => {
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener("change", handleMediaChange);
        } else if (mediaQuery.removeListener) {
          mediaQuery.removeListener(handleMediaChange);
        }
      };
    }
  }, [breakpoint]);

  return isMobile;
}
