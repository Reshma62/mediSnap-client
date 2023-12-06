const Heading = ({ children }) => {
  return (
    <h2 className="text-center text-teal-900 text-4xl font-bold mb-10">
      {children}{" "}
      <span className="w-36 h-1 bg-teal-700 block mx-auto text-center mt-3"></span>
    </h2>
  );
};

export default Heading;
