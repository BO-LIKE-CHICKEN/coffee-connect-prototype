import React from 'react';

/**
 * @description IOS에서는 100vh가 기대와 다르게 동작하는 문제가 있어 이를 해결할 때 유용합니다.
 */
export const useHeight = () => {
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  return height;
};
