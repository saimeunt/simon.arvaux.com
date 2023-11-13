export type State = {
  notificationOpen: boolean;
  notificationSuccess: boolean;
};

export const defaultState = (): State => ({
  notificationOpen: false,
  notificationSuccess: true,
});

export type Action =
  | { type: 'OPEN_NOTIFICATION'; payload: { success: boolean } }
  | { type: 'CLOSE_NOTIFICATION' };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
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
