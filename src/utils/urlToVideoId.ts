export const urlToVideoId = (url: string) => {
  // const regEx = /(?<=v=|v\/|vi=|vi\/|youtu.be\/|shorts\/)[a-zA-Z0-9_-]{11}/i;
  const regex = /(v=|v\/|vi=|vi\/|youtu.be\/|shorts\/)([a-zA-Z0-9_-]{11})/i;
  const matches = url.match(regex);
  if (!matches || matches.length < 3) {
    return '';
  }
  return matches[2];
};
