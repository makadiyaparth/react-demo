import { useState } from 'react';
import './App.css';
import NoteApp from './components/NoteApp';
import Search from './components/Search';

const App = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className='container'>
      <Search searchText={searchText} setSearchText={setSearchText} />
      <NoteApp searchText={searchText} />
    </div>
  );
};

export default App;
