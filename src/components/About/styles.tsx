import tw from 'tailwind-styled-components';

export const Container = tw.div`
  flex
  flex-col
  justify-around
  items-center
  gap-8
  w-full
`;

export const ProfileImage = tw.div`
bg-profile
rounded-full
bg-cover
w-56
h-56
grow-0
shrink-0
`;

export const ProfileText = tw.div`
w-10/12
md-6/12
lg-4/12
text-center
`;
