import tw from 'tailwind-styled-components';

export const Page = tw.div`
relative
min-h-screen
flex
flex-col
items-center
gap-14
text-slate-200
bg-gradient-to-tr
from-slate-900
via-slate-800
to-slate-900
`;

export const Content = tw.div`
pt-16
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
