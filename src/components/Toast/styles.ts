import tw from 'tailwind-styled-components';

export const StyledTost = tw.div`
w-80
p-4
flex
flex-row
justify-start
items-center
bg-white
dark:bg-slate-800
text-slate-700
dark:text-slate-200
rounded-md
drop-shadow-md
fixed
bottom-4
left-4
animate-slide
`;

const Icon = tw.div`
inline-flex 
h-8 
w-8 
shrink-0 
items-center 
justify-center 
rounded-lg 
`;

export const IconSuccess = tw(Icon)`
bg-green-100 
text-green-500 
dark:bg-green-800 
dark:text-green-200
`;

export const IconDelete = tw(Icon)`
bg-rose-100 
text-rose-500 
dark:bg-rose-800 
dark:text-rose-200
`;

export const Content = tw.div`
ml-3 
text-sm 
font-normal
`;
