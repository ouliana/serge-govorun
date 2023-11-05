import tw from 'tailwind-styled-components';

export const Page = tw.div`
relative
min-h-screen
flex
flex-col
justify-start
items-center
gap-12
text-zinc-200
bg-black
`;

export const Content = tw.div`
px-4
w-full
flex
flex-col
gap-24
justify-start
items-center
px-4
bg-no-repeat bg-cover bg-center
bg-[url('../images/bg.jpg')]
bg-fixed
`;

export const IconButton = tw.div`
cursor-pointer
`;
