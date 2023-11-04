import { IoPersonCircle } from 'react-icons/io5';
import tw from 'tailwind-styled-components';

export const StyledFooter = tw.div`
py-8
w-full
flex
flex-row
justify-around
items-center
border-t
border-lime-400
  px-4
`;

export const PersonIcon = tw(IoPersonCircle)`
w-6
h-6
`;
