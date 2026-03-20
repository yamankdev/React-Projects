function Button({ children, variant = "outline", onClick, className }) {
  const base = "px-2 py-1 flex justify-center rounded-md";
  const variants = {
    outline: "ring-1 ring-green-500 text-green-700 text-[0.7rem] mt-2",
    green: "",
    secondary: "",
    danger: "bg-red-500 text-white",
  };
  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
