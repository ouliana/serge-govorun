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
border-purple-100
  dark:border-purple-200
  px-4
`;

export const PersonIcon = tw(IoPersonCircle)`
text-purple-200
w-6
h-6
`;
