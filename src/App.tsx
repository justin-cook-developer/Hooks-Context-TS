import React, { ReactElement } from 'react';

import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

const App: React.FC = (): ReactElement => {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookForm />
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
