import tw from 'tailwind-styled-components';
import {
  IoLogOutOutline,
  IoPencilOutline,
  IoTrashOutline,
  IoGridOutline,
  IoAddOutline,
  IoListOutline,
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
bg-indigo-50
fixed
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
relative
`;

export const AdminContent = tw.div`
overflow-auto
relative
space-y-8
mt-20
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
