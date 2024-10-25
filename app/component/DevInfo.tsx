import React from 'react'
import { GithubAccount } from "../page";

interface Props{
    user: GithubAccount;
}
const DevInfo = ({user}: Props) => {
    const formattedDate = new Date(user.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      });
  return (
    <div className='flex flex-col sm:flex-row justify-between w-full'>
        <div className='flex flex-col'>
            <h1 >{user.login}</h1>
            <link /> @{user.login}
        </div>
        <p >{formattedDate}</p>
    </div>
  )
}

export default DevInfo