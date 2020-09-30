import React, {useState} from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const ControllsWrap = styled.div`
  width: 100%;
  padding: 3px 5px;
`;

const PlayButtonWrap = styled.div`
  margin-right: 5px;
  display: inline-block;
`;

const Controlls = ({slider}) => {
  const [disableStop, setDisableStop] = useState(false)
  const play = () => {
    slider.slickPlay();
    setDisableStop(false);
  } 
  const stop = () => {
    slider.slickPause();
    setDisableStop(true);
  } 

  return (
    <ControllsWrap>
      <PlayButtonWrap><Button name='play' handler={play} /></PlayButtonWrap>
      <Button disabled={disableStop} name='stop' handler={stop} />
    </ControllsWrap>
  );
}

export default Controlls;