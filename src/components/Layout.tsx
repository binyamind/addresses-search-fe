export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center w-screen h-screen overflow-x-hidden overflow-y-hidden relative ">
      <div className="flex flex-col w-full h-full items-center mt-[50px]">{children}</div>
    </div>
  );
};
