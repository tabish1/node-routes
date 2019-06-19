import React from "react";
import App, { Container } from "next/app";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    pageProps = "";

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

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
