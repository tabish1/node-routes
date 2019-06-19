import React from "react";
import Link from "next/link";

const Today = () => (
  <>
    <p>this is today page </p>
    <Link href="/">
      <a>home</a>
    </Link>
  </>
);

Today.getInitialProps = async ({ req, res }) => {
  console.log("today getinitprops");
  return {};
};

export default Today;
