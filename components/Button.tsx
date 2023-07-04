interface BtnText {
  text: string;
}
const Button: React.FC<BtnText> = ({ text }) => {
  return (
    <div className="px-3 py-2 border rounded-md hover:bg-gray-900 duration-500 cursor-pointer">
      {text}
    </div>
  );
};

export default Button;
