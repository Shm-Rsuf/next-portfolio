interface SectionHeadingText {
  text: string;
}
const SectionHeading: React.FC<SectionHeadingText> = ({ text }) => {
  return (
    <h2 className="text-4xl sm:text-6xl text-gray-50 text-center py-10 uppercase">
      {text}
    </h2>
  );
};

export default SectionHeading;
