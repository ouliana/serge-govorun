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
justify-center
`;

export const Image = tw.img`
w-16
aspect-square
rounded-md
m-2
`;

export const Title = tw.div`
text-base
p-4
`;

export const DetailsWrapper = tw.div`
pt-4
pb-8
border-b
border-zinc-500
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
