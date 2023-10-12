import Container from "./StyledContainer";

const ShortVideo = ({videoId}: {videoId:string}) => {
  const src = `http://www.youtube.com/embed/${videoId}`;
  return <Container>
    <iframe className="w-full h-full" allowFullScreen={true} src={src}></iframe>
  </Container>
  
}

export default ShortVideo;