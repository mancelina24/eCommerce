import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="justify-center">
        <div>
          <h3>Get In Touch</h3>
          <p>the quick fox jumps over the lazy dog</p>
        </div>
        <div>
          <h3>Company Info</h3>
          <Link>About Us</Link>
          <Link>Carrier</Link>
          <Link>we are hiring</Link>
          <Link>Blog</Link>
        </div>
        <div>
          <h3>Feateures</h3>
          <Link>Business Marketing</Link>
          <Link>User Analiytic</Link>
          <Link>Live Chat</Link>
          <Link>Unlimited Support</Link>
        </div>
        <div>
          <h3>Resources</h3>
          <Link>IOS & Android</Link>
          <Link>Watch a Demo</Link>
          <Link>Customers</Link>
          <Link>API</Link>
        </div>
      </div>
      <div>
        <h6>Made With Love By Figmaland All Right Reserved</h6>
      </div>
    </footer>
  );
};

export default Footer;
