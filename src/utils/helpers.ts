export const generateImageUrl = (id: string): string | undefined =>
  id ? `${import.meta.env.VITE_IMAGE_URL}-${id}.png` : undefined;
