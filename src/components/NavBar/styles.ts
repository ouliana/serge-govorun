import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { IoPersonCircle, IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

export const Container = tw.div`
  flex
  flex-row
  justify-between
  items-center
  w-full
  h-20
  border-b
  border-purple-100
  dark:border-purple-200
  px-4
`;

export const ProfileImage = tw.div`
bg-profile
rounded-full
bg-cover
border
border-purple-100
dark:border-purple-200
w-12
h-12
grow-0
shrink-0
cursor-pointer
`;

export const NavLink = tw(Link)`
text-bold
text-purple-50
font-bold
hover:text-white
dark:text-purple-200
dark:hover:text-purple-50
text-sm
`;

export const Navigation = tw.div`
flex
flex-row
justify-end
gap-4
mx-4
`;

export const LightIcon = tw(IoSunnyOutline)`
text-purple-200
`;
export const DarkIcon = tw(IoMoonOutline)`
text-purple-200
`;
export const PersonIcon = tw(IoPersonCircle)`
text-purple-200
w-6
h-6
`;
