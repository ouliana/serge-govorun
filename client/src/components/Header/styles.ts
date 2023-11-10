import tw from 'tailwind-styled-components';

export const BaseWrapper = tw.div`
w-full
flex
justify-start
px-4
md:px-8

`;

export const Wrapper = tw(BaseWrapper)`
flex-row
items-center
gap-4
bg-gradient-to-b
from-black
from-70%
to-transparent
py-12
`;

export const TextWrapper = tw(BaseWrapper)`
flex-col
sm:flex-row
items-start

`;

export const HeaderText = tw.div`
text-2xl
shrink-0
uppercase
`;
export const Green = tw(HeaderText)`
text-lime-400
sm:border-r
sm:border-lime-400
sm:px-4
`;
export const White = tw(HeaderText)`
sm:px-4
`;

export const ProfileImage = tw.div`
bg-no-repeat bg-cover bg-center
bg-[url('../images/profile-gray.jpg')]
rounded-full
bg-cover
w-24
h-24
grow-0
shrink-0
`;
