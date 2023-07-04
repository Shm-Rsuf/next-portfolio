const Footer = () => {
  return (
    <footer className="bg-gray-700">
      <div className="wrapper flex_center text-gray-50 py-5">
        <p>&copy; {new Date().getFullYear()}</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
