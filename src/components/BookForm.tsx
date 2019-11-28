import React, { useContext, useState } from 'react';

import { BookContext, IBookContext } from '../contexts/BookContext';

export default function BookForm() {
    const { addBook } = useContext<IBookContext>(BookContext);
    const [title, setTitle] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        addBook(title);
        setTitle('');
    }

    return (
        <form id="form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">
                    <input 
                        id="title"
                        type="text"
                        required
                        placeholder="Enter a book title..."
                        value={title}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setTitle(e.target.value)}
                    />
                </label>
            </div>

            <div>
                <button type="submit">Add book</button>
            </div>
        </form>
    )
}
