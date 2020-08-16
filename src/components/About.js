import React from "react";
import Interactive from "react-interactive";
import { Link } from "react-router-dom";

export default function About() {
  const interactiveLink = (text, link) => (
    <Interactive as="a" className="link" href={link}>
      {text}
    </Interactive>
  );

  return (
    <div>
      <h1 className="title">About</h1>
      <p>
        I used{" "}
        {interactiveLink("this template", "http://spa-github-pages.rafrex.com")}{" "}
        for this single page app using GitHub Pages. The source is{" "}
        {interactiveLink(
          "here",
          "https://github.com/rafrex/spa-github-pages#readme"
        )}
        .
      </p>
      <p>
        The source for this website is available{" "}
        {interactiveLink(
          "here",
          "https://github.com/RahulPaiCreations/rahulpaicreations.github.io"
        )}
        .
      </p>
    </div>
  );
}
