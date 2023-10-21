import tw from 'tailwind-styled-components';

import { Eye, EyeOff } from '@styled-icons/ionicons-outline';

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

export const ErrorInputStyle = 'border-rose-500 dark:border-rose-400';

export const Input = tw.input`
  appearance-none 
  block
  bg-slate-50 
  dark:bg-slate-600 
  w-full 
  text-slate-600
  dark:text-slate-200
  border
  border-slate-200
  dark:border-slate-200
  rounded-md 
  py-2 
  px-4 
  leading-tight 
  focus:outline-none
  focus:border-indigo-500
  transition 
  duration-300 
  ease-in-out
`;
export const InputWrapper = tw.div`
  flex-col 
  items-center 
`;

export const InputGroup = tw.div`
 flex
 flex-col
 gap-4
 my-8
`;

export const Error = tw.div`
  text-rose-600
  dark:text-rose-400
  text-xs
`;

export const ErrorPlaceholder = tw(Error)`
  invisible 
`;

export const Button = tw.button`
  bg-indigo-500
  dark:bg-indigo-400
  hover:bg-indigo-700 
  text-indigo-50 
  dark:text-indigo-50 
  py-2 
  px-4 
  rounded-md
  w-full
  transition 
  duration-300 
  ease-in-out
`;

export const IconButton = tw.div`
cursor-pointer
`;

export const FormWrapper = tw.div`
  w-96
  p-8
`;

export const Label = tw.label`
   text-slate-700 
   dark:text-slate-50
   mb-2
`;
export const LabelWithIcon = tw(Label)`
   relative
`;

export const StyledEye = tw(Eye)`
  text-slate-400 
  dark:text-slate-30
  cursor-pointer 
  w-6 
  h-6 
  absolute 
  top-1/2 
  transform 
  -translate-y-1/2 
  right-3
`;
export const StyledEyeOff = tw(EyeOff)`
  text-stone-600
  dark:text-stone-200
  cursor-pointer 
  w-6 
  h-6 
  absolute 
  top-1/2 
  transform 
  -translate-y-1/2 
  right-3
`;
