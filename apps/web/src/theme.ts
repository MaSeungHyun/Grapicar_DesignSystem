export const THEMES = ["mint", "sky", "blue"] as const;
export type ThemeType = (typeof THEMES)[number];
