import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  // const lsMode = window.localStorage.getItem('mode');
  // const [mode, setMode] = useState<string>(lsMode ? lsMode : 'dark');

  // if (!mode) {
  //   window.localStorage.getItem('mode');
  // }
  // if (
  //   localStorage.theme === 'dark' ||
  //   (!('theme' in localStorage) &&
  //     window.matchMedia('(prefers-color-scheme: dark)').matches)
  // ) {
  //   document.documentElement.classList.add('dark');
  // } else {
  //   document.documentElement.classList.remove('dark');
  // }

  useEffect(() => {
    // document.documentElement.classList.add('dark');
  }, []);
  return <Outlet />;
};

export default App;
