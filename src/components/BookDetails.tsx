import React, { useContext} from 'react';

import { BookContext, IBookContext } from '../contexts/BookContext';
import { Book } from '../reducers/books';

interface Props {
    book: Book;
}

const BookDetails: React.FC<Props> = ({ book }) => {
    const { removeBook } = useContext<IBookContext>(BookContext);

    return (
        <li className="book" onClick={(): void => removeBook(book.id)}>
            <div className="title">{book.title}</div>
        </li>
    );
}

export default BookDetails;