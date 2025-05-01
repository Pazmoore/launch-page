import { FaInstagram, FaLinkedin,FaYoutube, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <section>
      {/* Footer */}
      <footer className="mt-10">
        <div className="flex justify-between items-center mb-10">
          <Image
            src="/images/logo.png"
            alt="Trila Logo"
            width={50}
            height={50}
            className="mb-4 transition-opacity duration-300 rounded-full"
          />
          <div className="flex gap-1 p-2">
            {[
              { icon: FaInstagram, hover: "hover:text-pink-700" },
              { icon: FaXTwitter, hover: "hover:text-gray-700" },
              { icon: FaLinkedin, hover: "hover:text-blue-800" },
              { icon: FaYoutube, hover: "hover:text-gray-700" },
              { icon: FaFacebook, hover: "hover:text-gray-700" },
            ].map(({ icon: Icon, hover }, index) => (
              <div key={index} className="p-1 rounded-xl bg-[#FFFFFF1A]">
                <Icon className={`text-black text-lg transition ${hover}`} />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
