import React, { createContext, useReducer, useEffect } from 'react';

import { booksReducer, Book, AddBookAction, RemoveBookAction } from '../reducers/books';

type removeBook = (id: string) => void;
type addBook = (title: string) => void;

export interface IBookContext {
    books: Book[];
    addBook: addBook;
    removeBook: removeBook;
}

export const BookContext: React.Context<IBookContext> = createContext<IBookContext>({
    books: [],
    addBook: (title: string): void => {},
    removeBook: (id: string): void => {}
});

interface Props {
    children: React.ReactNode;
}

const BookContextProvider: React.FC<Props> = ({ children }) => {
    const [books, dispatch] = useReducer(booksReducer, [], (): Book[] => {
        const _books: string | null = localStorage.getItem("books");
        return _books !== null ? JSON.parse(_books) : [];
    });

    useEffect((): void => {
        localStorage.setItem("books", JSON.stringify(books));
    }, [books]);

    const addBook: addBook = (title: string): void => {
        const action: AddBookAction = { type: "ADD", title };
        dispatch(action);
    }

    const removeBook: removeBook = (id: string): void => {
        const action: RemoveBookAction = { type: "REMOVE", id };
        dispatch(action);
    }

    return (
        <BookContext.Provider value={{
            books,
            addBook,
            removeBook
        }}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;