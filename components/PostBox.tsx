import { CameraIcon, LinkIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import Avatar from "./Avatar";
import { useForm } from "react-hook-form";

type FormData = {
  postTitle: string;
  postBody: string;
  postImage: string;
  subreddit: string;
};

function PostBox() {
  const { data: session } = useSession();
  const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false);
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <form className="sticky top-16 z-50 bg-white border rounded-md border-gray-300 p-2">
      <div className="flex items-center space-x-3">
        {/* Avatar */}
        <Avatar />
        {/* Post Content */}
        <input
          {...register("postTitle", { required: true })}
          disabled={!session}
          type="text"
          className="rounded-md flex-1 bg-gray-50 p-2 pl-5 outline-none"
          placeholder={
            session ? "Create a post by entering a title!" : "Sing in to post"
          }
        />

        <CameraIcon
          onClick={() => setImageBoxOpen(!imageBoxOpen)}
          className={`h-6 text-gray-300 cursor-pointer ${
            imageBoxOpen && "text-blue-700"
          }`}
        />
        <LinkIcon className="h-6 text-gray-300" />
      </div>

      {!!watch("postTitle") && (
        <div className="flex flex-col py-2">
          {/* Body */}
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Body:</p>
            <input
              className="m-2 flex-1 bg-blue-50 p-2 outline-none"
              {...register("postBody", { required: true })}
              type="text"
              placeholder="Text (Optional)"
            />
          </div>

          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Subreddit:</p>
            <input
              className="m-2 flex-1 bg-blue-50 p-2 outline-none"
              {...register("subreddit", { required: true })}
              type="text"
              placeholder="i.e. Funny"
            />
          </div>

          {imageBoxOpen && (
            <div className="flex items-center px-2">
              <p className="min-w-[90px]">Image URL:</p>
              <input
                className="m-2 flex-1 bg-blue-50 p-2 outline-none"
                {...register("postImage")}
                type="text"
                placeholder="(Optional)"
              />
            </div>
          )}

          {/* ! ERRORS ! */}
          {Object.keys(errors).length > 0 && (
            <div className="space-y-2 p-2 text-red-500">
              {errors.postTitle?.type === "required" && (
                <p> - A Post Title is required</p>
              )}
              {errors.postBody?.type === "required" && (
                <p> - A Post Body is required</p>
              )}
              {errors.subreddit?.type === "required" && (
                <p> - A Subreddit is required</p>
              )}
            </div>
          )}

          {!!watch("postTitle") && (
            <button className="w-full rounded-full bg-blue-400 p-2 text-white">
              Create Post
            </button>
          )}
        </div>
      )}
    </form>
  );
}

export default PostBox;
