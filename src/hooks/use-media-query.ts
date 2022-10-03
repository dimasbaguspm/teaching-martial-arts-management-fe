import { useState, useCallback, useMemo, useLayoutEffect } from 'react';

import { MAX_MOBILE_SCREEN } from 'constants/screen-resolution';

export const useMediaQuery = () => {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  const isMobileScreen = useMemo(() => currentWidth <= MAX_MOBILE_SCREEN, [currentWidth]);

  const resizeFunction = useCallback(() => {
    setCurrentWidth(window.innerWidth);
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('resize', resizeFunction);
    return () => window.removeEventListener('resize', resizeFunction);
  }, [resizeFunction]);

  return {
    isMobileScreen,
    currentWidth,
  };
};
