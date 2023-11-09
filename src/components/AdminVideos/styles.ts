import { Accordion } from 'flowbite-react';
import tw from 'tailwind-styled-components';

export const StyledAccordion = tw(Accordion)`
w-full 
border-none 
`;

export const StyledAccordeonTitle = tw(Accordion.Title)`
border-b 
border-zinc-500
`;

export const TitleWrapper = tw.div`
flex
grow
shrink-0
items-center
`;

export const Image = tw.img`
w-16
aspect-square
rounded-md
m-2
`;

export const Title = tw.div`
text-base
`;

export const TableWrapper = tw.div`
overflow-auto
`;

export const StyledTable = tw.table`
w-full
table-auto
border-collapse
border
border-zinc-200
dark:border-zinc-700
bg-zinc-50
dark:bg-zinc-800
`;

const Cell = tw.td`
p-4
border
border-zinc-200
dark:border-zinc-700
`;

export const Td = tw(Cell)`
text-zinc-700
dark:text-zinc-400
`;

export const Th = tw(Cell)`
text-zinc-700
dark:text-zinc-50
`;

export const FormatWrapper = tw.div`
flex
flex-row
justify-start
gap-4
`;

export const VideoListContainer = tw.div`
flex
flex-col
justify-start
gap-4
`;

export const ListItemWrapper = tw.div`
flex 
flex-row
justify-start
items-center
w-full
rounded-lg 
border 
border-zinc-200 
bg-white 
shadow-sm 
dark:border-zinc-700 
dark:bg-zinc-800
hover:bg-zinc-100
dark:hover:bg-zinc-700
transition 
ease-in-out 
duration-300
cursor-pointer
`;

export const ButtonsWrapper = tw.div`
w-full
flex
flex-row
justify-start
items-center
gap-4
`;
