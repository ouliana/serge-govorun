export const urlToVideoId = (url: string) => {
  // const regEx = /(?<=v=|v\/|vi=|vi\/|youtu.be\/|shorts\/)[a-zA-Z0-9_-]{11}/i;
  const regEx = /(v=|v\/|vi=|vi\/|youtu.be\/|shorts\/)[a-zA-Z0-9_-]{11}/i;
  const part = url.match(regEx);
  console.log('url: ', url);
  console.log(part);
  if (part?.length) {
    return part[0];
  }
  return '';
};
