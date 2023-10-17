export const videoUrl = (videoId: string): string => {
  return `https://www.youtube.com/embed/${videoId}`;
};

export const stillUrl = (videoId: string): string => {
  return `https://img.youtube.com/vi/${videoId}/0.jpg`;
};
