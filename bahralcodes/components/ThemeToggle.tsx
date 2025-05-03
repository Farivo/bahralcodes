import { useTheme } from 'next-themes';
export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
};
