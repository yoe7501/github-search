'use client';
import GitPage from "./component/GitPage";
import axios from "axios";
import { useEffect, useState } from 'react';

export type GithubAccount = {
  login: string;
  avatar_url: string;
  created_at: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  email: string;
  twitter_username: string;
  company: string;
};

export default function Home() {
  const [user, setUser] = useState<GithubAccount | null>(null);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('yoe7501');

  useEffect(() => {
    const url = `https://api.github.com/users/${query}`;
    axios.get<GithubAccount>(url)
      .then((res) => {
        setUser(res.data);
        setError(''); // Clear error on successful fetch
      })
      .catch(err => setError(err.message));
  }, [query]);

  return (
    <div>
      {error && <div className="error-message">{error}</div>}
      <GitPage user={user} setQuery={setQuery} />
    </div>
  );
}
