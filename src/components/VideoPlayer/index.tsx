import Container from "./StyledContainer";

const VideoPlayer = ({videoId}: {videoId:string}) => {
  const src = `https://www.youtube.com/embed/${videoId}`;
  return <Container>
    <iframe className="w-full h-full" allowFullScreen={true} src={src}></iframe>
  </Container>
  
}

export default VideoPlayer;