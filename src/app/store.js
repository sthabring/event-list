import { configureStore } from '@reduxjs/toolkit';
import eventReducer from '../features/events/events-reducer';

export default configureStore({
  reducer: {
    events: eventReducer,
  },
});
