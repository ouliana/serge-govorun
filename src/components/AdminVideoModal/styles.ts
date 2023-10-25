import { Modal } from 'flowbite-react';
import tw from 'tailwind-styled-components';

export const FormatWrapper = tw.div`
flex
flex-row
justify-start
gap-4
`;

export const StyledFooter = tw(Modal.Footer)`
justify-end
`;
