import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import NotFound from './NotFound';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';

const Player = ({ match, playing, getVideoSource, history }) => {
  const { id } = match.params;
  const hasPlaying = Object.keys(playing).length > 0;
  // El flash aprece por que useEffect es asincronoo por lo que el codigo sigue ejecutandose
  // y al principio es false el hasPlaying, cuando se vuelve verdadero entonces si se ve
  // el reproductor
  // useEffect(() => {
  //   getVideoSource(id);
  // }, []);
  useLayoutEffect(() => {
    getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) :
    <NotFound />;
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
// mapStateToProps sirve para traer y va en el primer argumento
// mapDispatchToProps srive para llevar dataos al estado
