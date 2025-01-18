import React from "react";

const CommentSection = () => {
    return (
      <div>
        <h3 className="text-2xl font-bold mb-6">Leave a Reply</h3>
        <form className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Name *"
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Email *"
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <textarea
            placeholder="Your comment"
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="saveInfo"
              className="mr-2 border-gray-300 rounded focus:ring-orange-500"
            />
            <label htmlFor="saveInfo" className="text-gray-600 text-sm">
              Save my name, email, and website in this browser for the next time I
              comment.
            </label>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600"
          >
            Submit Now
          </button>
        </form>
      </div>
    );
  };
  
  export default CommentSection;
  