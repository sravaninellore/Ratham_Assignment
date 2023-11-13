import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  age: '',
  enrollmentDetails: {},
};

const studentInfoSlice = createSlice({
  name: 'studentInfo',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setEnrollmentDetails: (state, action) => {
      state.enrollmentDetails = action.payload;
    },
  },
});

export const { setName, setAge, setEnrollmentDetails } = studentInfoSlice.actions;

export default studentInfoSlice.reducer;
