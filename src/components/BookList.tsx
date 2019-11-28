import React, { useContext} from 'react';

import { BookContext, IBookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';
import { Book } from '../reducers/books';

const BookList: React.FC = (): React.ReactElement => {
    const { books } = useContext<IBookContext>(BookContext);

    if (books.length === 0) {
        return (
            <div className="empty">
                No books to read.
            </div>
        );
    }
        
    return (
        <div>
            <ul className="book-list">
                {books.map((b: Book) => (
                    <BookDetails book={b} key={b.id} />
                ))}
            </ul>
        </div>
    );
}

export default BookList;
