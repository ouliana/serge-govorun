import tw from 'tailwind-styled-components';
import {
  IoLogOutOutline,
  IoPencilOutline,
  IoTrashOutline,
  IoGridOutline,
  IoAddOutline,
  IoListOutline,
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
h-10
flex
flex-row
justify-between
items-center
gap-2
`;

export const PageAdminHeaderRightGroup = tw.div`
flex
flex-row
justify-end
items-center
gap-4
`;

export const PageAdmin = tw.div`
relative
min-h-screen
flex
flex-col
justify-start
gap-14
text-slate-700
dark:text-slate-100
bg-white
dark:bg-slate-900
px-8
`;

export const Content = tw.div`
px-4
w-full
flex
flex-col
gap-8
items-center
`;

export const AdminContent = tw.div`
overflow-auto
relative
space-y-8
`;

const StyledButton = tw.button`
bg-indigo-500
  dark:bg-amber-300
  hover:bg-indigo-700 
  dark:hover:bg-amber-400 
  text-indigo-50 
  dark:text-slate-700 
  dark:hover:text-slate-900
  rounded-md
  transition 
  duration-300 
  ease-in-out
`;

export const Button = tw(StyledButton)`
  w-full
  sm:w-32
  py-2 
  px-4 
`;

export const PlusButton = tw(StyledButton)`
fixed
bottom-8
right-8
w-16
text-2xl
p-2
shadow-2xl
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

export const StyledGrid = tw(IoGridOutline)`
  text-slate-600
  dark:text-slate-50
  w-10
  h-10
  p-2
`;

export const StyledAdd = tw(IoAddOutline)`
  text-slate-600
  dark:text-slate-50
  w-10
  h-10
  p-2
`;

export const StyledList = tw(IoListOutline)`
  text-slate-600
  dark:text-slate-50
  w-10
  h-10
  p-2
`;
