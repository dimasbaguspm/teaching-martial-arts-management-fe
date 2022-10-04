import { createContext, Dispatch, SetStateAction, useContext } from 'react';

// NOTE: handle the visible of navigator with `setIsVisible` function
export interface INavigatorContent {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

export const NavigatorContext = createContext<INavigatorContent | null>(null);

export const useNavigatorContext = () => useContext(NavigatorContext);
