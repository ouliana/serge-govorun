import Player from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AudioPlayer = () => {

  return (
    <>
      <Player
    autoPlay
    src="https://drive.google.com/uc?export=download&id=1wKVZ4jCHYzKKi0uegh78xp-kb79reJVU"
    onPlay={() => console.log("onPlay")}
    // other props here
  />
    </>
  )
}

export default AudioPlayer
