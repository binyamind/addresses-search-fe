export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center h-screen overflow-x-hidden overflow-y-visible">
      <div className="flex flex-col w-screen h-screen items-center  mt-[50px] flex-1">{children}</div>
    </div>
  );
};
