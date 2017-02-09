// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
// import styles from './PlayBox.css';

export default class PlayBox extends Component {

  playAudio() {
    this.refs.audio.play()
  }
  pauseAudio() {
    this.refs.audio.pause()
  }
  stopAudio() {
    this.refs.audio.load()
  }
  sendFileToStore(){
    this.props.openFile(this.props.audioIndex);
  }

  render() {
    console.log(this.props)
    let audioSrc;

    if(this.props.audioIndex === 1){
      audioSrc = this.props.audioOne
    } else {
      audioSrc = this.props.audioTwo
    }
    // const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return (
      <div>
        <audio className="audio" controls={true} ref="audio" src={audioSrc}></audio>
        <button onClick={ ()=>{ this.playAudio(); }}>Play</button>
        <button onClick={ ()=>{ this.pauseAudio(); }}>Pause</button>
        <button onClick={ ()=>{ this.sendFileToStore(); }}>Open</button>
      </div>
    );
  }
}

// createSongUri(file[0], 'audio/mp3')
// .then((song) => { dispatch(createSongAction(song)) })