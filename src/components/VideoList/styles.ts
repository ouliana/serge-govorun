import tw from 'tailwind-styled-components';
import { IoPlay } from 'react-icons/io5';

export const Wrapper = tw.div`
w-full
flex
flex-col
justify-center
gap-8

`;

export const ContainerWidescreen = tw.div`
  px-4  
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-3
  gap-16
`;
export const ContainerShorts = tw.div`
px-4
  grid
  grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  gap-16

`;

export const VideoWrapper = tw.div`
flex
flex-col
shrink-0
grow-1
py-4
rounded-lg
ring-1
ring-lime-400
px-4
`;

export const Description = tw.div`
grow
pt-4
text-sm
`;

export const ImageWrapper = tw.div`
relative
bg-center bg-cover opacity-70 hover:opacity-90 transition ease-in-out duration-300
h-full
w-full
`;

export const StyledPlay = tw(IoPlay)`
h-8
w-8
absolute
m-auto
left-0 right-0 top-0 bottom-0
text-white
`;
