import React from 'react'
import { GithubAccount } from "../page";

interface Props{
    user: GithubAccount;
}
const FollowCount = ({user} : Props) => {
  return (
    <div className='flex flex-row justify-between bg-backGround rounded-lg p-2 px-4'>
            <div className='flex flex-col gap-3'><p>Repos</p> <p className='text-center'>{user.public_repos}</p></div>
            <div className='flex flex-col gap-3'><p>Followers</p> <p className='text-center'>{user.followers}</p></div>
            <div className='flex flex-col gap-3'><p>Following</p> <p className='text-center'>{user.following}</p></div>
    </div>
  )
}

export default FollowCount