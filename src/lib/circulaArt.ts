const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/photos/circula/*.{jpg,jpeg,png,webp}',
  { eager: true }
);

export const circulaArt: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(files).map(([path, mod]) => [
    path.split('/').pop()!.replace(/\.\w+$/, ''),
    mod.default
  ])
);
