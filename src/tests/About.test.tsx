import { describe, expect, it, vi } from 'vitest';
import * as useAboutHook from '../hooks/useAboutParagraphs';
import { AboutParagraph } from '../shared/AboutParagraph';
import About from '../components/About';
import { render } from '@testing-library/react';

describe('About', () => {
  const useAboutSpy = vi.spyOn(useAboutHook, 'default');

  const items = [
    {
      id: 'StarWars',
      paragraph_position: 1,
      paragraph_ru: 'Джордж Лукас',
      paragraph_en: 'George Lucas',
    },
  ] as AboutParagraph[];

  useAboutSpy.mockReturnValue({
    paragraphs: items,
  });

  it('should render the the list of paragraps', () => {
    const { getByTestId } = render(<About />);
    expect(getByTestId('paragraphs-list').children.length).toBe(items.length);
  });
});
