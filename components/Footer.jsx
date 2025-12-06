import React from "react";
import "@/assets/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-flex">
        <p>Made with ❤️ by Martin</p>
        <div className="copyright">
          &copy; {currentYear} Martin Development. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
