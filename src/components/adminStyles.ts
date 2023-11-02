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
border-indigo-600
bg-indigo-400
bg-slate-50/75
dark:bg-slate-800/75
dark:text-slate-50
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
text-slate-700
dark:text-slate-200
bg-white
dark:bg-slate-900
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
`;

const StyledButton = tw(BaseButton)`
  bg-indigo-500
  hover:bg-indigo-600 
  dark:bg-indigo-400
  dark:hover:bg-indigo-500 
  text-indigo-50 
  dark:text-slate-700 
  dark:hover:text-slate-900
 
`;

// export const PlusButton = tw(StyledButton)`
// fixed
// bottom-8
// right-8
// w-16
// text-2xl
// p-2
// shadow-2xl
// `;

const DButton = tw(BaseButton)`
bg-rose-500
  hover:bg-rose-700 
  dark:bg-rose-400
  dark:hover:bg-rose-500 
  text-rose-50 
  dark:text-slate-700 
  dark:hover:text-slate-900
`;

export const Button = tw(StyledButton)`
  w-full
  sm:w-32
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
export const StyledHome = tw(IoHomeOutline)`
  text-slate-600
  dark:text-slate-50
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
bg-slate-900
`;

export const StyledHeader = tw(Modal.Header)`
p-4
text-slate-700
dark:text-slate-50
`;

export const StyledBody = tw(Modal.Body)`
p-4
`;

export const StyledFooter = tw(Modal.Footer)`
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
