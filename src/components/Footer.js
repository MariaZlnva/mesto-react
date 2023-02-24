import React from "react";

function Footer() {

  let data = new Date();
  let year = data.getFullYear();

  return (
    <footer className="footer page__footer">
      <p className="footer__copyright">© {year} Mesto Russia</p>
    </footer>
  );
}

export default Footer;
