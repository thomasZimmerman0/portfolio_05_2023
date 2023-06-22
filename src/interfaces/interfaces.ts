export interface BibleState {
  status: string;
  quoteName: string;
  quote: string;
}

export interface Book {
  abbreviation: string;
  bibleId: string;
  id: string;
  name: string;
  nameLong: string;
}

export interface Chapter {
  bibleId: string;
  bookId: string;
  id: string;
  number: string;
  reference: string;
}

export interface Verse {
  bibleId: string;
  bookId: string;
  chapterId: string;
  id: string;
  orgId: string;
  reference: string;
}

export interface Quote {
  bibleId: string;
  bookId: string;
  chapterId: string;
  content: string;
  copyright: string;
  id: string;
  next: { id: string; number: string };
  orgId: string;
  previous: { id: string; number: string };
  reference: string;
  verseCount: number;
}
export interface BibleStateBuilder {
  quote: string;
  quoteName: string;
}

export interface skillsImages {
  javascript: string;
  typescript: string;
  css: string;
  ajax: string;
  angular: string;
  cProgLang: string;
  cli: string;
  cloudinary: string;
  express: string;
  firebase: string;
  framerMotion: string;
  github: string;
  gsuite: string;
  html: string;
  java: string;
  microsoftOffice: string;
  mySQL: string;
  node: string;
  oAuth: string;
  passport: string;
  php: string;
  postgresql: string;
  python: string;
  react: string;
  redux: string;
  restAPI: string;
  sequelize: string;
  vscode: string;
  wordpress: string;
}
