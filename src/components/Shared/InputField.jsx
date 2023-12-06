const InputField = ({ label, type, name, value, onChangeInput }) => {
  return (
    <>
      {" "}
      <div className=" text-white relative input-my my-10">
        <input
          value={value}
          type={type}
          className=""
          required
          name={name}
          onChange={onChangeInput}
        />

        <label>{label}</label>
      </div>
    </>
  );
};

export default InputField;
