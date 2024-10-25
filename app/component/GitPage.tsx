'use client';
import React, { useState } from 'react';
import "../styles/styles.css";
import DarkShow from './DarkShow';
import LightShow from './LightShow';
import SearchBar from './SearchBar';
import InnerCard from './InnerCard';
import { GithubAccount } from '../page';

interface Props {
  user: GithubAccount | null;
  setQuery: (query: string) => void;
}

const GitPage = ({ user, setQuery }: Props) => {
  const [isLight, setColor] = useState(true);

  const toggleTheme = () => {
    setColor(!isLight);
  };

  console.log(user);
  
  return (
    <div className={`${isLight ? 'light' : 'dark'} big`}>
      <div className='card'>
        <div className='top'>
          <h1 className='text-xl'>devfinder</h1>
          <button onClick={toggleTheme}>
            {isLight ? <DarkShow /> : <LightShow />}
          </button>
        </div>
        <SearchBar setQuery={setQuery} />
        {user ? <InnerCard user={user} /> : <div>No user found.</div>}
      </div>
    </div>
  );
}

export default GitPage;
