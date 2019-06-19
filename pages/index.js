import React from "react";
import { Link } from "../server/next-routes";

const Home = () => (
  <Link href="/login">
    <a>Login</a>
    <p>this is a test paragraph</p>
  </Link>
);

Home.getInitialProps = async ({ req, res }) => {
  console.log("home res");
  return {};
};

export default Home;
