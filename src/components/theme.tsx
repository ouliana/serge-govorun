import tw from 'tailwind-styled-components';

export const Page = tw.div`
relative
min-h-screen
flex
flex-col
items-center
gap-24
text-slate-200
bg-no-repeat bg-cover bg-center
bg-[url('../images/bg.jpg')]

`;

export const Content = tw.div`
pt-16
px-4
w-full
flex
flex-col
gap-24
items-center
`;

export const IconButton = tw.div`
cursor-pointer
`;
