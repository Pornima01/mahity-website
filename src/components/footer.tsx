"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";

declare global {
  interface Window {
    _linkedin_partner_id: string;
    _linkedin_data_partner_ids: string[];
    lintrk: (a: string, b: object) => void;
  }
}

const Footer = () => {
  useEffect(() => {
    window._linkedin_partner_id = "8211657";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(window._linkedin_partner_id);

    const linkedInScript = document.createElement("script");
    linkedInScript.type = "text/javascript";
    linkedInScript.async = true;
    linkedInScript.src =
      "https://snap.licdn.com/li.lms-analytics/insight.min.js";

    const linkedInFunction = document.createElement("script");
    linkedInFunction.type = "text/javascript";
    linkedInFunction.innerHTML = `
      (function(l) {
        if (!l){
          window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
          window.lintrk.q=[];
        }
      })(window.lintrk);
    `;

    document.head.appendChild(linkedInFunction);
    document.head.appendChild(linkedInScript);

    const noscriptElement = document.createElement("noscript");
    const imgElement = document.createElement("img");
    imgElement.height = 1;
    imgElement.width = 1;
    imgElement.style.display = "none";
    imgElement.alt = "";
    imgElement.src = "https://px.ads.linkedin.com/collect/?pid=8211657&fmt=gif";
    noscriptElement.appendChild(imgElement);
    document.body.appendChild(noscriptElement);

    return () => {
      if (linkedInFunction.parentNode) {
        document.head.removeChild(linkedInFunction);
      }
      if (linkedInScript.parentNode) {
        document.head.removeChild(linkedInScript);
      }
      if (noscriptElement.parentNode) {
        document.body.removeChild(noscriptElement);
      }
    };
  }, []);

  return (
    <footer
      style={{
        background:
          "linear-gradient(to top left, #FFA726 40%, #FFD54F 80%, #FFEB3B 100%)",
      }}
      className="text-gray-200 body-font shadow-lg"
    >
      <div className="container mx-auto pt-3 pb-5 px-4">
        {/* Social Media Section */}
        <div className="mb-6 text-center md:text-left">
          <div className="text-gray-800 flex justify-center md:justify-start gap-7 mb-3">
            <div className="text-lg font-semibold mb-3 pt-1">Join Us On</div>
            <a
              href="https://www.facebook.com/MahitySystem"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 pt-2"
            >
              <FaFacebookF className="text-xl transition transform hover:scale-300 duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/company/mahity/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 pt-2"
            >
              <FaLinkedin className="text-xl transition transform hover:scale-110 duration-300 " />
            </a>
          </div>
          <hr className="border-gray-500" />
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm mt-5 space-y-4 md:space-y-0">
          {/* Left side - Copyright */}
          <div className="text-black text-center md:text-left">
            <p>
              {" "}
              Mahity Systems Pvt Ltd &copy; {new Date().getFullYear()} , All
              rights reserved.
            </p>
          </div>

          {/* Right side - Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
            <a href="/contact-us/" className="text-gray-800 hover:text-black">
              Contact Us
            </a>
            <a href="/blogs/" className="text-gray-800 hover:text-black">
              Blogs
            </a>
            {/* <a
              href="/student-program"
              className="text-gray-800 hover:text-black"
            >
              Student Program
            </a> */}
            <Link
              href="/privacy-policy"
              className="text-gray-800 hover:text-black"
            >
              Privacy Policy
            </Link>
            {/* <Link
              href="/refund-policy"
              className="text-gray-800 hover:text-black"
            >
              Refund Policy
            </Link> */}
            <Link
              href="/terms-of-use"
              className="text-gray-800 hover:text-black"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
