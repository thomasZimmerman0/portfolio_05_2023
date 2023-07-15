import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BibleState, Book, Chapter, Verse, Quote, BibleStateBuilder } from '../interfaces/interfaces';

type Responses = Book[] | Chapter[] | Verse[] | Quote;

const initialState: BibleState = {
  status: "",
  quoteName: "",
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
  } else if (type === 'getChapters') url = `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/books/${id}/chapters`;
  else if(type === 'getVerses') url = `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/chapters/${id}/verses`;
  else if (type === 'getQuote') url = `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/verses/${id}`;
  try{
    let response = await fetch(url, {
      method: 'GET',
      headers: reqHeader
    })
    await response.json().then((res: {data: Responses})=>{
      JSONQuote = res.data
      JSON = res.data
    })
  } catch {
    return null
  }
  if(type === "getQuote"){
    return JSONQuote as Quote
  } else{if(randNum === -1) randNum = Math.floor(Math.random() * JSON.length)}
  return JSON[randNum]
}

export const fetchQuote = createAsyncThunk('bible/fetchQuote', async()=>{
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('api-key', process.env.REACT_APP_BIBLE_API!);
  const setBibleQuote : BibleStateBuilder = {
    quote: "",
    quoteName: ""
  }
  const book = await callAPI('getBooks', requestHeaders) as Book;
  const chapter = await callAPI('getChapters', requestHeaders, book.id) as Chapter;
  const verse = await callAPI('getVerses', requestHeaders, chapter.id) as Verse;
  const quote = await callAPI('getQuote', requestHeaders, verse.id) as Quote;
  setBibleQuote.quote = quote.content;
  setBibleQuote.quoteName = verse.reference;
  return setBibleQuote;
})

export const bibleSlice = createSlice({
  name: 'bible',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = 'loading'
        state.quote = 'Retrieving your quote'
      })
      .addCase(fetchQuote.fulfilled, (state, action: PayloadAction<BibleStateBuilder>) => {
        state.quote = action.payload.quote
        state.quoteName = action.payload.quoteName
        state.status = 'success'
      })
      .addCase(fetchQuote.rejected, (state) => {
        state.status = 'failed'
        state.quote = "Cannot fetch a random quote at this time"
      })
    }
})

export default bibleSlice.reducer