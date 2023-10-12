import ShortVideoList from "./components/ShortVideoList"
import VideoPlayer from "./components/VideoPlayer"


  const App = () => {
  
  return (
    <>
      <h1 className="text-3l font-bold text-red-500">Serge Govorun</h1>
      <VideoPlayer videoId="ZHsh8LnlebM"  />
      <ShortVideoList  />
    </>
  )
}

export default App
