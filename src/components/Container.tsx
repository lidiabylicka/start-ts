'use client';

const Container = ({
  theme,
  children,
}: {
  theme?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`flex flex-col min-h-screen ${theme}`}>{children}</div>
  );
};
export default Container;
