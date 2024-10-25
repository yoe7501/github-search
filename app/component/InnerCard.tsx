import React from "react";
import DevInfo from "./DevInfo";
import BottomLinks from "./BottomLinks";
import FollowCount from "./FollowCount";
import { GithubAccount } from "../page";

interface Props{
    user: GithubAccount;
}

const InnerCard = ({user} : Props) => {
  return (
    <div className="inner ">
      <img
        className="rounded-full size-20 hidden md:block"
        src={user.avatar_url}
        alt="Avator Photo"
      />
      <div className="flex flex-col gap-5">
    
        <div className="flex flex-row gap-4">
          <img
            className="rounded-full size-20 block md:hidden"
            src={user.avatar_url}
            alt="Avator Photo"
          />
          <DevInfo user={user}/>
        </div>

        <p>
          {user.bio || "User Bio Not Available"}
        </p>
        <FollowCount user={user} />
        <BottomLinks user={user} />
      </div>
    </div>
  );
};

export default InnerCard;
