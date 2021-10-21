import { configureStore } from '@reduxjs/toolkit';
import DisplaySlice from './Components/FormDisplay/DisplaySlice';


export default  configureStore({
    reducer:{
        display: DisplaySlice,
    }
})