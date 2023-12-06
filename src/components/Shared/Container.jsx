const Container = ({ children }) => {
  return (
    <div className="xl:max-w-[1320px] mx-auto xl:px-0 md:px-20 sm:px-10 px-5">
      {children}
    </div>
  );
};

export default Container;
