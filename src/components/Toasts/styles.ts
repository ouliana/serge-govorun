import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
flex 
flex-col 
gap-4
`;

export const Icon = tw.div`
inline-flex 
h-8 
w-8 
shrink-0 
items-center 
justify-center 
rounded-lg 
bg-green-100 
text-green-500 
dark:bg-green-800 
dark:text-green-200
`;

export const Content = tw.div`
ml-3 
text-sm 
font-normal
`;
