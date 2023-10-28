import { Modal } from 'flowbite-react';
import tw from 'tailwind-styled-components';

export const FormatWrapper = tw.div`
flex
flex-row
justify-start
gap-4
`;

export const StyledModal = tw(Modal)`
w-full
sm:px-32
lg:px-52
xl:px-96
`;

export const StyledHeader = tw(Modal.Header)`
p-4
text-slate-700
dark:text-slate-50
`;

export const StyledBody = tw(Modal.Body)`
p-4
`;

export const StyledFooter = tw(Modal.Footer)`
justify-end
gap-4
p-4
`;
