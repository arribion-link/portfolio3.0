import footer_img from "../../assets/footer.png";

const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: `url(${footer_img})` }}
      className="relative bg-no-repeat bg-cover bg-center min-h-[80vh] text-white text-center mt-12">
      <h1 className="text-slate-50 bottom-10 right-0 left-0 text-2xl absolute text-center">
        copyright &copy; {new Date().getFullYear()} JEFF M NTONGAI. ARRIBION
        TECHNOLOGIES. CODNIFY.DEV
      </h1>
    </footer>
  );
};

export default Footer;
