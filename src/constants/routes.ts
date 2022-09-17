export const wildcardPath = "*";
export const homePath = "/";
export const charactersPath = "/characters";
export const characterPath = `${charactersPath}/:id`;
export const buildCharacterPath = (id: string | number) =>
  `${charactersPath}/${id}`;
