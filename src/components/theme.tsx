import tw from "tailwind-styled-components"

import {Eye, EyeOff} from '@styled-icons/ionicons-outline'

export const StyledEye = tw(Eye)`
  text-stone-600
  dark:text-stone-200
`
export const StyledEyeOff = tw(EyeOff)`
  text-stone-600
  dark:text-stone-200
`

export const StyledInput = tw.input`
  appearance-none 
  bg-transparent 
  border-none
  w-full 
  text-stone-600
  dark:text-stone-200
  mr-3 
  py-1 
  px-2 
  leading-tight 
  focus:outline-none
`

export const StyledInputContainer = tw.div`
  flex 
  items-center 
  border-b 
  border-indigo-500 
py-2
`


