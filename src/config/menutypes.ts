// src/config/menuTypes.ts
export interface NavEntry {
  key: string;
  label: string;
  path?: string;
  icon?: string;
  onClick?: () => void;
}

export interface MenuSection<T> {
  title: string;
  items: T[];
}