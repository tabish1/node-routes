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

  let testCodeSmell = true;
  let firstCondition = true;
  let secondCondition = true;

  if (testCodeSmell) {
    if (firstCondition) {
      if (secondCondition) {
        console.log("code smell it is");
      }
    }
  } else {
    console.log("no code smelll");
  }

  return {};
};

export default Today;
