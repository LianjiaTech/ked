import * as React from 'react'

export type MenuTheme = 'light' | 'dark';

export interface MenuContextProps {
  inlineCollapsed: boolean;
  antdMenuTheme?: MenuTheme;
}

const MenuContext = React.createContext<MenuContextProps>({
  inlineCollapsed: false,
});

export default MenuContext;
