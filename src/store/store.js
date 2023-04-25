import {configureStore} from '@reduxjs/toolkit'
import { todoSlice } from '../sliecs/Reducer'

export const store = configureStore({
  reducer:{
    todo: todoSlice.reducer

  }
})