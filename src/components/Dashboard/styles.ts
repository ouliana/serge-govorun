import tw from 'tailwind-styled-components';
import { Accordion } from 'flowbite-react';

export const TitleWrapper = tw.div`
flex
flex-row
justify-start
items-center
gap-4
`;

export const Image = tw.img`
w-20
aspect-square
rounded-md
`;

export const Title = tw.div`
text-base
p-4
`;

export const StyledAccordion = tw(Accordion)`
w-full
border-none
bg-slate-100
dark:bg-slate-700
`;

export const AccordionItemWrapper = tw.div`

border-t
border-slate-600
dark:border-slate-300
`;

export const StyledTitle = tw(Accordion.Title)`
px-4
`;

export const StyledContent = tw(Accordion.Content)`
px-8
bg-slate-50
dark:bg-slate-800

`;

export const StyledTable = tw.table`
w-full
table-auto
border-collapse
border
border-slate-200
dark:border-slate-700
`;

const Cell = tw.td`
p-4
border
border-slate-200
dark:border-slate-700
`;

export const Td = tw(Cell)`
text-slate-700
dark:text-slate-400
`;

export const Th = tw(Cell)`
text-slate-700
dark:text-slate-50
`;
