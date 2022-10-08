import React from "react";
import Link from "next/link";

const PostIndex = () => {
  return (
    <div>
      <h1>This is the post page</h1>

      <p>
        <Link href="/">Back to home</Link>
      </p>
      <p>
        <Link href="/posts/first-post">First Post</Link>
      </p>
      <p>
        <Link href="/addimage">Added Image Page</Link>
      </p>
    </div>
  );
};

export default PostIndex;
