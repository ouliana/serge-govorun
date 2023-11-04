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
  md:grid-cols-3
  lg:grid-cols-4
  justify-items-stretch
  grid-flow-row 
  gap-8
`;
export const ContainerShorts = tw.div`
px-4
  grid
  grid-cols-2
  sm:grid-cols-3
  md:grid-cols-4
  lg:grid-cols-6
  auto-rows-max
  gap-8
  aspect-[9/16]
`;

export const VideoWrapper = tw.div`
py-4
ring-1
ring-lime-400
flex
flex-col
shrink-0
grow-1
`;

export const Description = tw.div`
grow
pt-4
text-sm
`;

export const ImageWrapper = tw.div`
relative
h-full
w-full
`;

export const StyledPlay = tw(IoPlay)`
h-4
w-4
absolute
inset-y-1/2
inset-x-1/2
`;
