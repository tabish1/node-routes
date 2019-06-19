import React from "react";
import { Link } from "../server/next-routes";

const Home = () => (
  <Link href="/login">
    <a>login</a>
    <p>this is a test paragraph</p>
  </Link>
);

Home.getInitialProps = async ({ req, res }) => {
  console.log("home res");
  return {};
};

export default Home;
