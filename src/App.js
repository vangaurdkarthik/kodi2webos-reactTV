import React, { useState, useEffect } from "react";
import Navigation, { VerticalList, HorizontalList } from 'react-key-navigation'
import FocusablePoster from './components/Poster';
import FocusableList from './components/List';
import useFetch from './useFetch';

import debug from './util/debug.js';

const logger = debug('App');
logger('iniciou App');

function App(props) {

  //recupera os dados do websocket
  const data = useFetch();

  return (
    <div>
      <div className='title'>React-TV Template</div>
      <div className='focus-info'>You're focused on: {props.currentFocusPath}</div>
      <div className='posters'>
        <FocusablePoster focusPath='focusable-poster-1' src={'https://upload.wikimedia.org/wikipedia/en/1/15/Dunkirk_Film_poster.jpg'} />
        <FocusablePoster focusPath='focusable-poster-2' src={'https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg'} />
        <FocusablePoster focusPath='focusable-poster-3' src={'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg'} />
      </div>
      <div>
        <FocusableList focusPath='focusable-list-1' data={data} />
      </div>
    </div>
  );
}

export default App;
