export const urlToVideoId = (url: string) => {
  const part = url.match(
    /(?<=v=|v\/|vi=|vi\/|youtu.be\/|shorts\/)[a-zA-Z0-9_-]{11}/i
  );
  if (!part) {
    // throw new Error(`Невозможно выделить VideoId в ${url}`);
    return '';
  }

  return part[0];
};
