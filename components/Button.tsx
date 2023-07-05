interface BtnText {
  text: string;
}
const Button: React.FC<BtnText> = ({ text }) => {
  return (
    <div className="px-2 py-1 border border-gray-800 rounded-md hover:bg-gray-800 duration-500 cursor-pointer">
      {text}
    </div>
  );
};

export default Button;
