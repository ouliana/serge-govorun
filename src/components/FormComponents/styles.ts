import tw from 'tailwind-styled-components';
import { Field } from 'formik';

import { Eye, EyeOff } from '@styled-icons/ionicons-outline';

export const FormWrapper = tw.div`
  w-96
  p-8
`;

export const InputWithIcon = tw.label`
   relative
`;

export const RadioButtonsContainer = tw.div`
flex
flex-col
`;

export const RadioButtonWrapper = tw.div`
flex
flex-row
justify-start
items-center
gap-2
`;

export const RadioButton = tw.input`
appearance-none 
w-4 
h-4 
bg-radio 
bg-no-repeat
`;

export const Label = tw.label`
  font-normal
  text-slate-700 
  dark:text-slate-50
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
  w-8 
  h-8 
  p-2
  absolute 
  top-1/2 
  transform 
  -translate-y-1/2 
  right-3
`;

export const ErrorInputStyle = 'border-rose-500 dark:border-rose-400';

export const FieldsContainer = tw.div`
flex
flex-col
gap-4
`;

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
export const StyledField = tw(Field)`
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

export const FieldWrapper = tw.div`
flex-col 
items-center
`;

export const InputGroup = tw.div`
 flex
 flex-col
 gap-8
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

export const TextArea = tw(Field)`
block p-2.5 
w-full 
text-sm 
text-gray-900 
bg-gray-50 
rounded-lg 
border 
border-gray-300 
focus:ring-blue-500 
focus:border-blue-500 
dark:bg-gray-700 
dark:border-gray-600 
dark:placeholder-gray-400 
dark:text-white 
dark:focus:ring-blue-500 
dark:focus:border-blue-500
`;
