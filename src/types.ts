// src/types.ts

export interface Book {
  _id: string;
  id: string;
  name: string;
  auther: string;
  price: number;
  description?: string;
  image?: string;
  title: string;
  cover: string;
  
}
export interface imgListType {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  img6: string;
  img7: string;
}
export interface BooksState {
  items: Book[];
  selectedBook: Book | null; // Currently selected book
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface RootState {
  books: BooksState;
}
