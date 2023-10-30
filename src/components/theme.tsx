import tw from 'tailwind-styled-components';

export const Page = tw.div`
relative
min-h-screen
flex
flex-col
items-center
gap-14
text-indigo-900
dark:text-purple-100
bg-gradient-to-tr
from-emerald-400
via-indigo-300 
to-purple-300
dark:bg-gradient-to-br
dark:from-slate-900
dark:via-indigo-900 
dark:to-rose-900
`;

export const Content = tw.div`
px-4
w-full
flex
flex-col
gap-8
items-center
`;

export const IconButton = tw.div`
cursor-pointer
`;
