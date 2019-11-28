import React, { useContext } from 'react';

import { BookContext, IBookContext } from '../contexts/BookContext';

const Navbar: React.FC = (): React.ReactElement => {
    const { books } = useContext<IBookContext>(BookContext);

    return (
        <div className='navbar'>
            <h1>Ninja Reading List</h1>
            <p>Currently you have {books.length} books to read.</p>   
        </div>
    )
}

export default Navbar;