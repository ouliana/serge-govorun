import { expect, test } from 'vitest';
import { urlToVideoId } from './urlToVideoId';

test('https://www.youtube.com/watch?v=AfyTUFrkvtg is equals to AfyTUFrkvtg', () => {
  expect(urlToVideoId('https://www.youtube.com/watch?v=AfyTUFrkvtg')).toBe(
    'AfyTUFrkvtg'
  );
});

test('https://youtu.be/AfyTUFrkvtg?si=khN0f0_PwxWCmaM5 is equals to AfyTUFrkvtg', () => {
  expect(urlToVideoId('https://youtu.be/AfyTUFrkvtg?si=khN0f0_PwxWCmaM5')).toBe(
    'AfyTUFrkvtg'
  );
});

test('https://www.youtube.com/shorts/Zv6NXy_LYj4 is equals to Zv6NXy_LYj4', () => {
  expect(urlToVideoId('https://www.youtube.com/shorts/Zv6NXy_LYj4')).toBe(
    'Zv6NXy_LYj4'
  );
});

test('https://youtube.com/shorts/vWldDxB5CYg?si=dNfzru3yNM46I5jL is equals to vWldDxB5CYg', () => {
  expect(
    urlToVideoId('https://youtube.com/shorts/vWldDxB5CYg?si=dNfzru3yNM46I5jL')
  ).toBe('vWldDxB5CYg');
});

test('https://youtu.be/DC6DJQBnm6w?si=yzMSVJBTZEXWBE2J is equals to DC6DJQBnm6w', () => {
  expect(urlToVideoId('https://youtu.be/DC6DJQBnm6w?si=yzMSVJBTZEXWBE2J')).toBe(
    'DC6DJQBnm6w'
  );
});

// test(' is equals to ', () => {
//   expect(urlToVideoId('')).toBe(
//     ''
//   );
// });
