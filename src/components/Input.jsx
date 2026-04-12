const Input = ({ type, id, name }) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        name={name}
        className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>
  );
};

export default Input;
