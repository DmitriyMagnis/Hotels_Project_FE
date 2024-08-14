export const generateImageUrl = (id: string): string | undefined =>
  id ? `${import.meta.env.VITE_IMAGE_URL}-${id}.png` : undefined;

export const omitEmptyParams = (params: Record<string, any>) => {
  let omitedParams: Record<string, any> = {};

  for (let param in params) {
    if (
      params[param] !== undefined &&
      params[param] !== null &&
      params[param] !== ''
    ) {
      omitedParams[param] = params[param];
    }
  }
  return omitedParams;
};
