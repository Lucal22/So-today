import React, { useState } from 'react';

export default function MorePosts() {
  const [morePosts, setMorePosts] = useState(5);
  return (
    <div>
      <div></div>
      <div
        onClick={() => {
          setMorePosts(morePosts < 20 ? morePosts + 5 : morePosts);
        }}
      >
        <p className="cursor-pointer">{morePosts}</p>
      </div>
      <div></div>
    </div>
  );
}
