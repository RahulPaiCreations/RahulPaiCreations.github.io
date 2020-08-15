import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Code } from '../style';
import style from '../style';

const s = Object.create(style);

export default function About() {
  const interactiveLink = (text, link) => (
    <Interactive
      as="a"
      className="link"
      href={link}
    >{text}</Interactive>
  );

  return (
    <div>
      <h1 className="title">About</h1>
      <p style={s.p}>
        I used {interactiveLink('this template', "https://github.com/rafrex/spa-github-pages#readme")} for this single page app using GitHub Pages.
      </p>
      <p style={s.p}>
        The source for this website is available {interactiveLink('here', "https://github.com/RahulPaiCreations/rahulpaicreations.github.io")}.
      </p>
    </div>
  );
}
