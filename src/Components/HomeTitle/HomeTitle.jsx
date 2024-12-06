import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { consoleText } from '../../CustomsHooks/TitleHook';


const HomeTitle = () => {
  const textRef = useRef(null);
  const consoleRef = useRef(null);

  useEffect(() => {
    const words = ['Hello watch lovers.', 'Watch Game.', 'Good Luck.'];
    const colors = ['white', 'rebeccapurple', 'lightblue'];

    const cleanup = consoleText(words, textRef, consoleRef, colors);


    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <TitleDiv className="console-container">
      <span ref={textRef} id="text"></span>

    </TitleDiv>
  );
};

export default HomeTitle;


const TitleDiv = styled.div`
  

  .console-container {
    
    text-align:center;
  display:block;
  position:absolute;
  color:white;
  
}


  .hidden {
    opacity: 0;
  }
`;
