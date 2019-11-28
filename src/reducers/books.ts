import uuid from 'uuid/v4';

export interface Book {
    id: string,
    title: string;
}

export interface AddBookAction {
    type: "ADD";
    title: string;
    id?: string;
}

export interface RemoveBookAction {
    type: "REMOVE";
    id: string;
    title?: string;
}

type Actions = AddBookAction | RemoveBookAction;

export const booksReducer = (books: Book[], action: Actions): Book[] => {
    switch (action.type) {
        case "ADD": {
            const title: string = action.title || "Default";
            return [...books, { id: uuid(), title }];
        }

        case "REMOVE": {
            return books.filter(b => b.id !== action.id);
        }
        
        default:
            return books;
    }
}