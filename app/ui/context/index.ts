import { createContext } from 'react';

import { defaultState, type Action } from '@/app/ui/context/reducer';

export default createContext({
  state: defaultState(),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dispatch: (action: Action) => {
    // do nothing
  },
});
