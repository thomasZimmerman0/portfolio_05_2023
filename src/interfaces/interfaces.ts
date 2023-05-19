export interface BibleState {
    status: string,
    quote: string,
}

export interface Book {
  abbreviation: string,
  bibleId: string,
  id: string,
  name: string,
  nameLong: string
}

export interface Chapter {
  bibleId: string,
  bookId: string,
  id: string,
  number: string,
  reference : string
}

export interface Verse {
  bibleId: string,
  bookId: string,
  chapterId: string,
  id : string,
  orgId : string,
  reference: string,
}

export interface Quote {
  bibleId: string
  bookId: string
  chapterId: string
  content: string
  copyright: string
  id: string
  next: {id: string, number: string}
  orgId : string
  previous: {id: string, number: string}
  reference: string
  verseCount: number
}