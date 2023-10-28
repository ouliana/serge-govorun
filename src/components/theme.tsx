import tw from 'tailwind-styled-components';

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

export const Content = tw.div`
px-4
w-full
flex
flex-col
gap-8
items-center
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
