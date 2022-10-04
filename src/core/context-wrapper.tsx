import React, { FC, ReactNode, useMemo, useState } from 'react';

import { INavigatorContent, NavigatorContext } from 'contexts/navigate-context';

export interface IContextWrapper {
  children: ReactNode;
}

const ContextWrapper: FC<IContextWrapper> = ({ children }) => {
  const [isNavigatorVisible, setIsNavigatorVisible] = useState<boolean>(true);

  // navigatorContext value
  const navigatorContextValue = useMemo(
    (): INavigatorContent => ({
      isVisible: isNavigatorVisible,
      setIsVisible: setIsNavigatorVisible,
    }),
    [isNavigatorVisible]
  );

  return <NavigatorContext.Provider value={navigatorContextValue}>{children}</NavigatorContext.Provider>;
};

export default ContextWrapper;
