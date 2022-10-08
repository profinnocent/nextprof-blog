import React from "react";
import Image from "next/image";
import Link from "next/link";

const addimage = () => {
  return (
    <div>
      <Image src="/images/ppix7.jpg" width={144} height={144} alt="pix" />
      <Link href="/">Back to Home</Link>

      <p>
        <Link href="/posts">Posts Page</Link>
      </p>
    </div>
  );
};

export default addimage;
