import { describe, expect, it, vi } from 'vitest';
import useAboutParagraphs from '../hooks/useBlock';
// import About from '../components/About';
// import { render } from '@testing-library/react';

describe('About', () => {
  const aboutPars = {
    items: [
      {
        id: 'StarWars',
        paragraph_position: 1,
        paragraph_ru: 'Джордж Лукас',
        paragraph_en: 'George Lucas',
      },
    ],
    useAboutParagraphs,
  };

  it('should get paragraphs with a spy', () => {
    const spy = vi.spyOn(aboutPars, 'useAboutParagraphs');
    expect(spy.getMockName()).toEqual('useAboutParagraphs');
  });

  // it('should render the the list of paragraps', () => {
  //   const { getByTestId } = render(<About />);
  //   expect(getByTestId('paragraphs-list').children.length).toBe(items.length);
  // });
});
