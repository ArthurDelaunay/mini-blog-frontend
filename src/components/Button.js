const Button = ({ text, type, handleClick }) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className="text-white bg-gradient-to-r from-cyan-700 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 mt-3"
    >
      {text}
    </button>
  )
}

export default Button
