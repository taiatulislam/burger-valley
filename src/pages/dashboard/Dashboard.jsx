import React, { useState } from "react";

export default function Dashboard() {

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  
  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <p>This is where you'll see all your important information.</p>
      <p>This is where you'll see all your important information.</p>


      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-semibold mb-4">YouTube Like/Dislike</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleLike}>
            Like ({likes})
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={handleDislike}>
            Dislike ({dislikes})
          </button>
        </div>
      </div>
    </div>
  );
}
