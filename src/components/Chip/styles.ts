import tw from 'tailwind-styled-components';

export const ChipItem = tw.div`
rounded-3xl
cursor-pointer
font-bold
py-2
px-4
text-xs
grow-0
shrink-0
bg-purple-200
dark:bg-purple-500
text-indigo-900
dark:text-purple-100
`;

export const SelectedChipItem = tw(ChipItem)`
border
border-indigo-900
dark:border-purple-200
`;
