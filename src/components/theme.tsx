import tw from 'tailwind-styled-components';
import {
  IoLogOutOutline,
  IoPencilOutline,
  IoTrashOutline,
} from 'react-icons/io5';

export const Page = tw.div`
relative
min-h-screen
flex
flex-col
items-center
gap-14
text-indigo-900
dark:text-purple-100
bg-gradient-to-tr
from-emerald-400
via-indigo-300 
to-purple-300
dark:bg-gradient-to-br
dark:from-slate-900
dark:via-indigo-900 
dark:to-rose-900
`;

export const PageAdminHeader = tw.div`
flex
justify-end
items-center
gap-4
`;

export const PageAdmin = tw.div`
relative
min-h-screen
flex
flex-col
items-center
gap-14
text-slate-700
dark:text-slate-100
bg-white
dark:bg-slate-900
`;

export const Content = tw.div`
px-4
w-full
flex
flex-col
gap-8
items-center
`;

export const Button = tw.button`
  bg-indigo-500
  dark:bg-amber-300
  hover:bg-indigo-700 
  dark:hover:bg-amber-400 
  text-indigo-50 
  dark:text-slate-700 
  dark:hover:text-slate-900
  py-2 
  px-4 
  rounded-md
  w-full
  sm:w-32
  transition 
  duration-300 
  ease-in-out
`;

export const IconButton = tw.div`
cursor-pointer
`;

export const StyledLogOut = tw(IoLogOutOutline)`
  text-slate-600
  dark:text-slate-50
  w-10
  h-10
  p-2
`;
export const StyledPencil = tw(IoPencilOutline)`
  text-slate-600
  dark:text-slate-50
  w-10
  h-10
  p-2
`;
export const StyledTrash = tw(IoTrashOutline)`
  text-slate-600
  dark:text-slate-50
  w-10
  h-10
  p-2
`;
