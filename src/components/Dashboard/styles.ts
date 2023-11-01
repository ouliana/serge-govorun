import tw from 'tailwind-styled-components';

export const DashboardContainer = tw.div`
w-full
grid
grid-cols-2
md:grid-cols-4
gap-4
`;

export const CardContainer = tw.div`
flex 
flex-col
justify-between
gap-4
rounded-lg 
border 
border-slate-200 
bg-white 
shadow-md 
dark:border-slate-700 
dark:bg-slate-800
p-4
`;

export const CardText = tw.div`
text-slate-500
dark:text-slate-400
`;

export const ButtonGroup = tw.div`
flex
flex-row
justify-start
items-center
`;

export const FieldsGrid = tw.div`
grid
grid-cols-2
`;
