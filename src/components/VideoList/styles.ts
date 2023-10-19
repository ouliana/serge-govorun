import tw from 'tailwind-styled-components';
import { Modal } from 'flowbite-react';

export const Container = tw.div`
  grid
  grid-cols-2
  grid-flow-row 
  gap-4
`;

export const VideoModal = tw(Modal)`
bg-opacity-60
bg-indigo-900
p-2
`;

export const VideoModalHeader = tw(Modal.Header)`
bg-slate-900
text-slate-100
flex
flex-row
justify-between
p-4
`;

export const VideoModalBody = tw(Modal.Body)`
bg-slate-900
p-4
`;

export const Player = tw.iframe`
w-full
`;
