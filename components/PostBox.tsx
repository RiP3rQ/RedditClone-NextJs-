import { useSession } from "next-auth/react";
import React from "react";
import Avatar from "./Avatar";

function PostBox() {
  const { data: session } = useSession();
  return (
    <form>
      <div className="flex items-center space-x-3">
        {/* Avatar */}
        <Avatar />
        {/* Post Content */}
        <input
          disabled={!session}
          type="text"
          className="rounded-md flex-1 bg-gray-50 p-2 pl-5 outline-none"
          placeholder={
            session ? "Create a post by entering a title!" : "Sing in to post"
          }
        />
      </div>
    </form>
  );
}

export default PostBox;
