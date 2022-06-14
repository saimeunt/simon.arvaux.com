import { useContext } from 'react';

import Context from '.';
import { State } from './reducer';

type HookReturnType = State & {
  setDarkMode: (darkMode: boolean) => void;
  openNotification: (success: boolean) => void;
  closeNotification: () => void;
};

const Hook = (): HookReturnType => {
  const { state, dispatch } = useContext(Context);
  const setDarkMode = (darkMode: boolean) =>
    dispatch({ type: 'SET_DARK_MODE', payload: { darkMode } });
  const openNotification = (success: boolean): void => {
    dispatch({ type: 'OPEN_NOTIFICATION', payload: { success } });
    setTimeout(() => dispatch({ type: 'CLOSE_NOTIFICATION' }), 5 * 1000);
  };
  const closeNotification = (): void => dispatch({ type: 'CLOSE_NOTIFICATION' });
  return {
    ...state,
    setDarkMode,
    openNotification,
    closeNotification,
  };
};

export default Hook;
