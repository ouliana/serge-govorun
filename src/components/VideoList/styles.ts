import tw from 'tailwind-styled-components';
import Box from '@mui/material/Box';

export const Wrapper = tw.div`
w-full
flex
flex-col
justify-center
gap-16
`;

export const Container = tw.div`
  grid
  grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  grid-flow-row 
  gap-8
`;

export const VideoModal = tw.div`
absolute
top-0
left-0
h-full
w-full
bg-opacity-60
bg-slate-900
p-20
flex
flex-col
justify-center
items-center
`;

export const PlayerH = tw(Box)`
w-11/12
aspect-video 
`;

export const PlayerV = tw(Box)`
h-4/5
aspect-[9/16]
`;
