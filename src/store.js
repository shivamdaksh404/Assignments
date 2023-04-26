 import {configureStore} from '@reduxjs/toolkit'
import { buttonSlice } from './reducers';

 
export const store = configureStore({

    reducer: {
      buttons: buttonSlice.reducer
    },
  });
  
