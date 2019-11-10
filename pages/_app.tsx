import React from "react";
import App from "next/app";
import Nav from "../components/Nav";
import "../styles/index.css";
import Footer from "../components/Footer";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <div className="font-sans bg-green-200 p-4 max-w-3xl mx-auto">
        <Nav />

        <main className="my-8">
          <Component {...pageProps} />
        </main>

        <Footer />
      </div>
    );
  }
}
