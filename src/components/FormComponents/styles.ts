import tw from 'tailwind-styled-components';
import { Field } from 'formik';

export const FormWrapper = tw.div`
flex
flex-col
justify-start
items-center
  w-96
  p-8
  border
  border-zinc-300
  rounded-md
  dark:bg-zinc-800
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
  text-zinc-700 
  dark:text-zinc-50
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
  bg-zinc-50 
  dark:bg-zinc-600 
  w-full 
  text-zinc-600
  dark:text-zinc-200
  border
  border-zinc-200
  dark:border-zinc-200
  rounded-md 
  py-2 
  px-4 
  leading-tight 
  focus:outline-none
  focus:border-lime-500
  dark:focus:border-lime-400
  transition 
  duration-300 
  ease-in-out
`;
export const StyledField = tw(Field)`
  appearance-none 
  block
  bg-zinc-50 
  dark:bg-zinc-600 
  w-full 
  text-zinc-600
  dark:text-zinc-200
  border
  border-zinc-200
  dark:border-zinc-200
  rounded-md 
  py-2 
  px-4 
  leading-tight 
  focus:outline-none
  focus:border-lime-500
  dark:focus:border-lime-400
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
border-zinc-300 
focus:ring-lime-500 
focus:border-lime-500 
dark:bg-zinc-700 
dark:border-zinc-600 
dark:placeholder-zinc-400 
dark:text-zink-100 
dark:focus:ring-lime-400 
dark:focus:border-lime-400
`;
