import tw from 'tailwind-styled-components';

// export const Container = tw.div`
//   w-full
//   aspect-[9/16]
//   md:w-6/12
//   lg:w-3/12
// `;

export const Thumb = tw.img`
w-60
aspect-square
rounded-lg
cover
sm:opacity-80
hover:opacity-100
transition ease-in-out delay-150
cursor-pointer
`;

export const Player = tw.div`
  w-full 
  aspect-video
  md:w-6/12 
  lg:w-3/12
`;
