"use client";
import {
  HeartIcon,
  ChatIcon,
  ShareIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/solid";
import { useState } from "react";

export default function Timeline() {
  const [likeCount, setLikeCount] = useState(55);
  const [shareCount, setShareCount] = useState(22);
  const [commentCount, setCommentCount] = useState(19);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1); // Increment or decrement like count based on like state
  };

  return (
    <main
      className="h-screen overflow-y-auto"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="card w-full bg-base-100 shadow-xl mt-10 mb-10">
        <button
          type="button"
          aria-label="Close"
          className="uk-close absolute top-2 right-2 z-10"
        ></button>
        <div className="flex-shrink-0 group block">
          <div className="flex items-center">
            <img
              className="inline-block flex-shrink-0 w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300"
              alt="Image Description"
            />
            <div className="ms-3">
              <h3 className="font-semibold text-gray-800 dark:text-white">
                Mark Wanner
              </h3>
              <p className="text-sm font-medium text-gray-400">
                mark@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="card-body">
          <p className="text-base">
            If a dog chews shoes whose dog chews shoes whose dog chews shoes
            whose dog chews shoes whose dog chews shoes whose shoes does he
            choose? (This text can be replaced with your actual content) If a
            dog chews shoes whose dog chews shoes whose dog chews shoes whose
            dog chews shoes whose dog chews shoes whose shoes does he choose?
            (This text can be replaced with your actual content) If a dog chews
            shoes whose dog chews shoes whose dog chews shoes whose dog chews
            shoes whose dog chews shoes whose shoes does he
          </p>
        </div>
        <figure className="mb-4">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="flex justify-between px-6 py-3">
          <div className="flex space-x-4">
            <button
              className="flex items-center space-x-2 text-gray-600 dark:text-white"
              onClick={handleLikeClick}
            >
              {isLiked ? (
                <HeartIcon className="h-5 w-5 text-red-500" />
              ) : (
                <HeartIcon className="h-5 w-5" />
              )}
              <span>{likeCount} Likes</span>
            </button>
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="flex items-center space-x-2 text-gray-600 dark:text-white"
            >
              <ChatIcon className="h-5 w-5" />
              <span>{commentCount} Comments</span>
            </button>

            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* Close button */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>

                {/* User information */}
                <div className="flex items-center">
                  <img
                    className="inline-block flex-shrink-0 w-12 h-12 rounded-full"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300"
                    alt="Image Description"
                  />
                  <div className="ms-3">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Mark Wanner
                    </h3>
                    <p className="text-sm font-medium text-gray-400">
                      mark@gmail.com
                    </p>
                  </div>
                </div>

                {/* Comments */}
                <div
                  className="py-4"
                  style={{
                    maxHeight: "400px",
                    overflowY: "auto",
                    scrollbarWidth: "none",
                  }}
                >
                  {/* Fake comments */}
                  <div className="comment-item flex items-center space-x-2">
                    <span className="font-semibold text-gray-800 dark:text-white">
                      John Doe:{" "}
                    </span>
                    <span className="text-gray-600">
                      This is a fake comment.
                    </span>
                  </div>
                  <div className="comment-item flex items-center space-x-2">
                    <span className="font-semibold text-gray-800 dark:text-white">
                      Jane Smith:{" "}
                    </span>
                    <span className="text-gray-600">
                      Another fake comment here.
                    </span>
                  </div>
                  <div className="comment-item flex items-center space-x-2">
                    <span className="font-semibold text-gray-800 dark:text-white">
                      John Doe:{" "}
                    </span>
                    <span className="text-gray-600">
                      This is a fake comment.
                    </span>
                  </div>
                  <div className="comment-item flex items-center space-x-2">
                    <span className="font-semibold text-gray-800 dark:text-white">
                      Jane Smith:{" "}
                    </span>
                    <span className="text-gray-600">
                      Another fake comment here.
                    </span>
                  </div>
                  <div className="comment-item flex items-center space-x-2">
                    <span className="font-semibold text-gray-800 dark:text-white">
                      John Doe:{" "}
                    </span>
                    <span className="text-gray-600">
                      This is a fake comment.
                    </span>
                  </div>
                  <div className="comment-item flex items-center space-x-2">
                    <span className="font-semibold text-gray-800 dark:text-white">
                      Jane Smith:{" "}
                    </span>
                    <span className="text-gray-600">
                      Another fake comment here.
                    </span>
                  </div>
                  <div className="comment-item flex items-center space-x-2">
                    <span className="font-semibold text-gray-800 dark:text-white">
                      John Doe:{" "}
                    </span>
                    <span className="text-gray-600">
                      This is a fake comment.
                    </span>
                  </div>
                  <div className="comment-item flex items-center space-x-2">
                    <span className="font-semibold text-gray-800 dark:text-white">
                      Jane Smith:{" "}
                    </span>
                    <span className="text-gray-600">
                      Another fake comment here.
                    </span>
                  </div>
                  <div className="comment-item flex items-center space-x-2">
                    <span className="font-semibold text-gray-800 dark:text-white">
                      John Doe:{" "}
                    </span>
                    <span className="text-gray-600">
                      This is a fake comment.
                    </span>
                  </div>
                  <div className="comment-item flex items-center space-x-2">
                    <span className="font-semibold text-gray-800 dark:text-white">
                      Jane Smith:{" "}
                    </span>
                    <span className="text-gray-600">
                      Another fake comment here.
                    </span>
                  </div>{" "}
                  <div className="comment-item flex items-center space-x-2">
                    <span className="font-semibold text-gray-800 dark:text-white">
                      John Doe:{" "}
                    </span>
                    <span className="text-gray-600">
                      This is a fake comment.
                    </span>
                  </div>
                  <div className="comment-item flex items-center space-x-2">
                    <span className="font-semibold text-gray-800 dark:text-white">
                      Jane Smith:{" "}
                    </span>
                    <span className="text-gray-600">
                      Another fake comment here.
                    </span>
                  </div>
                  <div className="comment-item flex items-center space-x-2">
                    <span className="font-semibold text-gray-800 dark:text-white">
                      John Doe:{" "}
                    </span>
                    <span className="text-gray-600">
                      This is a fake comment.
                    </span>
                  </div>
                  <div className="comment-item flex items-center space-x-2">
                    <span className="font-semibold text-gray-800 dark:text-white">
                      Jane Smith:{" "}
                    </span>
                    <span className="text-gray-600">
                      Another fake comment here.
                    </span>
                  </div>
                  <div className="comment-item flex items-center space-x-2">
                    <span className="font-semibold text-gray-800 dark:text-white">
                      John Doe:{" "}
                    </span>
                    <span className="text-gray-600">
                      This is a fake comment.
                    </span>
                  </div>
                  <div className="comment-item flex items-center space-x-2">
                    <span className="font-semibold text-gray-800 dark:text-white">
                      Jane Smith:{" "}
                    </span>
                    <span className="text-gray-600">
                      Another fake comment here.
                    </span>
                  </div>
                  <div className="comment-item flex items-center space-x-2">
                    <span className="font-semibold text-gray-800 dark:text-white">
                      John Doe:{" "}
                    </span>
                    <span className="text-gray-600">
                      This is a fake comment.
                    </span>
                  </div>
                  <div className="comment-item flex items-center space-x-2">
                    <span className="font-semibold text-gray-800 dark:text-white">
                      Jane Smith:{" "}
                    </span>
                    <span className="text-gray-600">
                      Another fake comment here.
                    </span>
                  </div>
                  {/* Add more fake comments here */}
                </div>

                {/* Input field and send button */}
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Your comment here"
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                  <button className="btn btn-primary">Send</button>
                </div>
              </div>
            </dialog>
            <button className="flex items-center space-x-2 text-gray-600 dark:text-white">
              <ShareIcon className="h-5 w-5" />
              <span>{shareCount} Shares</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
