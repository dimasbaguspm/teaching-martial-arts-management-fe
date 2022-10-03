import { APP_ENV } from 'constants/app-environment';
import { useCallback, useEffect, useState } from 'react';

export interface IAppConnect {
  refreshToken: string;
  lastAttemptLogin: string;
  identityLogin: {
    name: string;
    role: string;
    userId: string;
  };
}

// NOTE: I will hard code it atm
const myAwesomeUser: IAppConnect = {
  refreshToken: '',
  lastAttemptLogin: '',
  identityLogin: {
    name: 'Dimas Mukti',
    role: 'Coach',
    userId: '123123',
  },
};

export const useAppConnect = () => {
  const [session, setSession] = useState<null | IAppConnect>(null);

  useEffect(() => {
    handleFirstRender();
  }, []);
  // NOTE: I need handle the login functionality here
  // have a useEffect that able to hit the login endpoint
  const handleFirstRender = async () => {
    const storage = window.localStorage.getItem(APP_ENV.STORAGE_KEY);
    if (storage) {
      // handleRefreshToken();
      setSession(myAwesomeUser);
    }
  };

  const handleRefreshToken = useCallback(async () => {}, []);

  const handleLogin = useCallback(
    async (props?: string) => {
      const respSession: IAppConnect = await new Promise((res) => res(myAwesomeUser));
      window.localStorage.setItem(APP_ENV.STORAGE_KEY, JSON.stringify(respSession));
      setSession(myAwesomeUser);
    },
    [session]
  );

  const handleLogout = useCallback(async () => {}, []);

  return {
    session,
    handleRefreshToken,
    handleLogin,
    handleLogout,
  };
};
