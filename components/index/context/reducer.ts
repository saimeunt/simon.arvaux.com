export type State = {
  darkMode: boolean;
  notificationOpen: boolean;
  notificationSuccess: boolean;
};

export const defaultState = (): State => ({
  darkMode: false,
  notificationOpen: false,
  notificationSuccess: true,
});

export type Action =
  | { type: 'SET_DARK_MODE'; payload: { darkMode: boolean } }
  | { type: 'OPEN_NOTIFICATION'; payload: { success: boolean } }
  | { type: 'CLOSE_NOTIFICATION' };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_DARK_MODE': {
      if (action.payload.darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return { ...state, darkMode: action.payload.darkMode };
    }
    case 'OPEN_NOTIFICATION': {
      return { ...state, notificationOpen: true, notificationSuccess: action.payload.success };
    }
    case 'CLOSE_NOTIFICATION': {
      return { ...state, notificationOpen: false };
    }
    default: {
      return state;
    }
  }
};
