import tw from 'tailwind-styled-components';

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

export const TableContainer = tw.div`
overflow-auto
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

export const ButtonGroup = tw.div`
w-full
flex
flex-row
justify-end
gap-2
items-center
pb-4
`;
