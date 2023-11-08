import tw from 'tailwind-styled-components';
import {
  IoLogOutOutline,
  IoPencilOutline,
  IoTrashOutline,
  IoGridOutline,
  IoAddOutline,
  IoListOutline,
  IoHomeOutline,
} from 'react-icons/io5';
import { Modal } from 'flowbite-react';

export const PageAdminHeader = tw.div`
h-16
w-full
z-10
flex
flex-row
justify-between
items-center
gap-2
border-b-2
border-lime-600
dark:border-lime-400
bg-zink-100
bg-zinc-50/75
dark:bg-zinc-800/75
dark:text-zinc-50
fixed
`;

export const PageAdminHeaderRightGroup = tw.div`
flex
flex-row
justify-end
items-center
gap-2
`;
export const PageAdminHeaderLeftGroup = tw.div`
flex
flex-row
justify-start
items-center
gap-2
`;

export const PageAdmin = tw.div`
relative
min-h-screen
flex
flex-col
justify-start
gap-14
text-zinc-700
dark:text-zinc-200
bg-white
dark:bg-zinc-900
relative
`;

export const AdminContent = tw.div`
overflow-auto
relative
space-y-8
mt-20
px-4
`;

const BaseButton = tw.button`
rounded-md
transition 
duration-300 
ease-in-out
uppercase
`;

const StyledButton = tw(BaseButton)`
  border
  border-lime-600
  dark:border-lime-400
  hover:border-lime-200 
  dark:hover:border-lime-500
  text-lime-600 
  dark:text-lime-400
  hover:text-lime-600
  hover:bg-lime-200
  hover:border-lime-600 
  dark:hover:text-lime-200
  dark:hover:bg-lime-900
  dark:hover:border-lime-200 
  
 
`;

const DButton = tw(BaseButton)`
border
border-rose-500
  hover:border-rose-700 
  dark:border-rose-400
  dark:hover:border-rose-500 
  text-rose-400 
  dark:text-rose-300
  dark:hover:text-rose-200
  dark:hover:bg-rose-900
`;

export const Button = tw(StyledButton)`
  w-full
  sm:w-32
  py-2 
  px-4 
`;

export const SignInButton = tw(StyledButton)`
w-32
py-2 
  px-4 
`;

export const DangerButton = tw(DButton)`
w-full
  sm:w-32
  py-2 
  px-4 
`;

export const ButtonGroup = tw.div`
w-full
flex
flex-row
justify-end
gap-2
items-center
pb-4
`;

export const StyledLogOut = tw(IoLogOutOutline)`
  text-zinc-600
  dark:text-zinc-50
  w-10
  h-10
  p-2
`;
export const StyledPencil = tw(IoPencilOutline)`
  text-zinc-600
  dark:text-zinc-50
  w-10
  h-10
  p-2
`;
export const StyledTrash = tw(IoTrashOutline)`
  text-zinc-600
  dark:text-zinc-50
  w-10
  h-10
  p-2
`;

export const StyledGrid = tw(IoGridOutline)`
  text-zinc-600
  dark:text-zinc-50
  w-10
  h-10
  p-2
`;

export const StyledAdd = tw(IoAddOutline)`
  text-zinc-600
  dark:text-zinc-50
  w-10
  h-10
  p-2
`;

export const StyledList = tw(IoListOutline)`
  text-zinc-600
  dark:text-zinc-50
  w-10
  h-10
  p-2
`;
export const StyledHome = tw(IoHomeOutline)`
  text-zinc-600
  dark:text-zinc-50
  w-10
  h-10
  p-2
`;

export const StyledModal = tw(Modal)`
w-full
z-20
sm:px-32
lg:px-52
xl:px-96
bg-opacity-70
bg-zinc-900
`;

export const StyledHeader = tw(Modal.Header)`
p-4
text-zinc-700
dark:text-zinc-50
dark:bg-zinc-800
`;

export const StyledBody = tw(Modal.Body)`
p-4
  dark:text-zinc-50
dark:bg-zinc-800
`;

export const StyledFooter = tw(Modal.Footer)`
dark:bg-zinc-800
justify-end
gap-4
p-4
`;

export const ListContainer = tw.div`
divide-y
`;

export const ItemContainer = tw.div`
w-full
flex
flex-row
justify-start
gap-4
py-2
`;
