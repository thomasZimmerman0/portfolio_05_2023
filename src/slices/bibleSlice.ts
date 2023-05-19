import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';
import { BibleState, Book, Chapter, Verse, Quote } from '../interfaces/interfaces';

type Responses = Book[] | Chapter[] | Verse[]| Quote;

const initialState: BibleState = {
  status: "",
  quote: ""
}

let callAPI = async(type: string, reqHeader: HeadersInit, id?: string) =>{
  let url: string = ''
  let randNum: number = -1
  let JSON: Responses = []
  let JSONQuote: {} | Quote = {}
  if(type === 'getBooks'){
    url = 'https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/books'
    randNum = Math.floor(Math.random() * 66);
  } else if(type === 'getChapters'){
    url = `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/books/${id}/chapters`;
  } else if(type === 'getVerses'){
    url = `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/chapters/${id}/verses`;
  } else if (type === 'getQuote'){
    url = `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/verses/${id}`
  }
  let response = await fetch(url, {
    method: 'GET',
    headers: reqHeader
  })
  await response.json().then((res: {data: Responses})=>{
    JSONQuote = res.data
    JSON = res.data
  })
  if(type === "getQuote"){
    return JSONQuote as Quote
  } else {
    if(randNum == -1) randNum = Math.floor(Math.random() * JSON.length);
    return JSON[randNum].id
  }
}

export const fetchQuote = createAsyncThunk('bible/fetchQuote', async()=>{
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('api-key', process.env.REACT_APP_BIBLE_API!);
  const bookId = await callAPI('getBooks', requestHeaders);
  const chapterId = await callAPI('getChapters', requestHeaders, bookId as string);
  const verseId = await callAPI('getVerses', requestHeaders, chapterId as string);
  const quote = await callAPI('getQuote', requestHeaders, verseId as string);
  return quote as Quote;
})

export const bibleSlice = createSlice({
  name: 'bible',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchQuote.fulfilled, (state, action: PayloadAction<Quote>) => {
        state.quote = action.payload.content
        state.status = 'success'
      })
      .addCase(fetchQuote.rejected, (state) => {
        state.status = 'failed'
      })
    }
})

export const selectCount = (state: RootState) => state.header.value;
export default bibleSlice.reducer