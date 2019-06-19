import React from "react";
import App, { Container } from "next/app";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    pageProps = "";
    pageProps = {};
    let testCodeSmell = true;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    if (testCodeSmell) {
      if (pageProps) {
        console.log("code smell it is");
      }
    } else {
      console.log("no code smelll");
    }

    if (testCodeSmell) {
      if (pageProps) {
        console.log("code smell it is");
      }
    } else {
      console.log("no code smelll");
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
