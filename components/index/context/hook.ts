import { useContext } from 'react';

import Context from '.';

const Hook = () => {
  const { state, dispatch } = useContext(Context);
  const openNotification = (success: boolean): void => {
    dispatch({ type: 'OPEN_NOTIFICATION', payload: { success } });
    setTimeout(() => dispatch({ type: 'CLOSE_NOTIFICATION' }), 5 * 1000);
  };
  const closeNotification = (): void => dispatch({ type: 'CLOSE_NOTIFICATION' });
  return {
    ...state,
    openNotification,
    closeNotification,
  };
};

export default Hook;
