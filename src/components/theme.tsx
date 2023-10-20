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

export const Content = tw.div`
px-4
w-full
flex
flex-col
gap-8
items-center
`;

export const ErrorInputStyle = 'border-rose-500 dark:border-rose-400';

export const StyledEye = tw(Eye)`
  text-stone-600
  dark:text-stone-200
`;
export const StyledEyeOff = tw(EyeOff)`
  text-stone-600
  dark:text-stone-200
 
`;

export const Input = tw.input`
  appearance-none 
  block
  bg-transparent 
  border
  w-full 
  text-stone-600
  dark:text-stone-200
  border
  border-stone-200
  dark:border-stone-200
  rounded-full
  py-2 
  px-4 
  leading-tight 
  focus:outline-none
  focus:border-indigo-500
  transition 
  duration-300 
  ease-in-out

`;
export const InputContainer = tw.div`
flex-col 
  items-center 
  w-full
  md:w-2/5
  lg:w-3/12

`;
export const Error = tw.div`
  text-rose-600
  dark:text-rose-400
  text-xs
`;

export const Button = tw.button`
  bg-indigo-500
  hover:bg-indigo-700 
  text-indigo-50 
  py-2 
  px-4 
  rounded-full
  w-full
  transition 
  duration-300 
  ease-in-out
`;

export const FormContainer = tw.div`
  flex-col 
  items-center 
  mb-6
  space-y-4
`;

export const Label = tw.label`
   text-stone-700 
   mb-2
`;
export const LabelWithIcon = tw.label`
text-stone-700 
   mb-2
   relative
`;

export const IconButton = tw.div`
cursor-pointer
`;
