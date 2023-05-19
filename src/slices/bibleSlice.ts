import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';
import dotenv from 'dotenv';


interface BibleState {
    status: string,
    quote: string,
}


const initialState: BibleState = {
    status: "",
    quote: ""
}

export const fetchQuote = createAsyncThunk('bible/fetchQuote', async()=>{
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('api-key', process.env.REACT_APP_BIBLE_API!);
  const quote = await fetch('https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/books', {
      method: 'GET',
      headers: requestHeaders
  })
  return (await quote.json()) as any;
})

export const bibleSlice = createSlice({
  name: 'bible',
  initialState,
  reducers: {
    getNewQuote: (state, action: PayloadAction<string>) => {
      state.quote = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchQuote.fulfilled, (state, action: PayloadAction) => {
        if(typeof(action.payload) == 'string' ){
            state.status = 'succeeded'
            state.quote = action.payload
        }
      })
      .addCase(fetchQuote.rejected, (state) => {
        state.status = 'failed'
      })
    }
})

// Action creators are generated for each case reducer function
export const { getNewQuote } = bibleSlice.actions

export const selectCount = (state: RootState) => state.header.value;

export default bibleSlice.reducer