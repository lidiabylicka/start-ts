import { useTheme } from 'next-themes';

const Container = ({
  theme,
  children,
}: {
  theme: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`flex flex-col min-h-screen ${
        theme === 'dark' ? 'bg-mainDark' : 'bg-mainLight'
      }`}>
      {children}
    </div>
  );
};

export default Container;
