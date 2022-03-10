import React, { useState } from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('afef');
  const [subtitle, setSubtitle] = useState('afef');
  const [font, setFont] = useState('comforter');
  const [align, setAlign] = useState('');
  const [text, setText] = useState('aff');
  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview {...{ title, subtitle, font, align, text }} />
      <Editor {...{ setAlign, setFont, setSubtitle, setText, setTitle }}/>
    </main>
  );
}
