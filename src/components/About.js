import React from "react";

export default function About() {
  return (
    <React.Fragment>
      <div className="otherBanner banner" />
      <h1 className="title titleLarge">About</h1>
      <p>
        I used{" "}
        <a href="http://spa-github-pages.rafrex.com" className="link">
          this template
        </a>{" "}
        for this single page app using GitHub Pages. The source is{" "}
        <a href="https://github.com/rafrex/spa-github-pages" className="link">
          here
        </a>
        .
      </p>
      <p>
        The source for this website is available{" "}
        <a
          href="https://github.com/RahulPaiCreations/rahulpaicreations.github.io"
          className="link"
        >
          here
        </a>
        .
      </p>
    </React.Fragment>
  );
}
