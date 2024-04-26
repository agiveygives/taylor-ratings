
type StylesType = {
  [key: string]: string;
}

export function styleToString(styles: StylesType) {
  return Object.entries(styles).map(([key, value]) => `${key}: ${value}`).join('; ');
}
