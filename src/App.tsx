import YouTube, { YouTubeProps } from 'react-youtube';


  const App = () => {
  
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  
    const opts: YouTubeProps['opts'] = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        // autoplay: 0,
      },
    };

  return (
    <>
      <h1 className="text-3l font-bold text-red-500">Serg Govorun</h1>
      <YouTube videoId="_pGj9Mz2dI0" opts={opts} onReady={onPlayerReady} />
    </>
  )
}

export default App
