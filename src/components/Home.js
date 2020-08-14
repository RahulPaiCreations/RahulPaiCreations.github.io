import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Code } from '../style';
import style from '../style';

const s = Object.create(style);

export default function Home() {
  const repoReadmeLink = text => (
    <Interactive
      as="a"
      {...s.link}
      href="https://github.com/rafrex/spa-github-pages#readme"
    >{text}</Interactive>
  );

  return (
    <div>
      <p style={s.p}>
      Hi, I'm Rahul Pai. I am an Engineering student at the University of Cambridge.
      On this website I show various projects I have done in my own time.
      My career interests are in software development and Blender is a hobby of mine.
      Most of my experience is in Python, which I used for WAV Randomiser and the StumPi interface.
      I have also used C# in Unity 3D, Java for Android app development and C++ for various coursework projects at Uni.
      </p>
      <div style={{margin: '1vh 0'}}>
        <Interactive
          as={Link}
          {...s.link}
          to="/example"
        >Example page</Interactive>
      </div>
      <div style={{margin: '1vh 0'}}>
        <Interactive
          as={Link}
          {...s.link}
          to="/example/two-deep?field1=foo&field2=bar#boom!"
        >Example two deep with query and hash</Interactive>
      </div>
      <div style={{margin: '1vh 0'}}>
        <Interactive
          as={Link}
          {...s.link}
          to="/blender"
        >Blender</Interactive>
      </div>
    </div>
  );
}
