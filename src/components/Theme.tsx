import { useSelector } from 'react-redux';
import { RootState } from '..';
import { useLayoutEffect } from 'react';

function ThemeProvider({ children }: any): JSX.Element {
  let state = useSelector((state: RootState) => state);

  useLayoutEffect(() => {
    document.documentElement.setAttribute(
      'color-theme',
      state.isDarkMode.value ? 'dark' : 'light'
    );
  }, [state.isDarkMode]);

  return <>{children}</>;
}

export default ThemeProvider;
