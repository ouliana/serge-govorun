import tw from 'tailwind-styled-components';

const Chip = tw.div`
rounded-3xl
cursor-pointer
font-bold
py-2
px-4
text-xs
grow-0
shrink-0
`;

export const ChipItem = tw(Chip)`
bg-purple-200
text-indigo-900
`;

export const SelectedChipItem = tw(Chip)`
border
border-indigo-900
`;
