import React, { useEffect } from 'react';

const useOutsideClick = <T extends HTMLElement>(callback: () => void) => {
  const ref = React.useRef<T>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref, callback]);

  return ref;
};

export default useOutsideClick;
