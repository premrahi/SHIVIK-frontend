import { useMediaQuery } from "react-responsive";
import { navLinks } from "../constants/index.js";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import img from "../assets/icons/arrow-up-right-square-svgrepo-com.svg";

const Navbar: React.FC = () => {
  // const isMobile:boolean = useMediaQuery({maxWidth:767})
  // const [isOpen , setIsOpen] = useState<boolean>(false) ;

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#000050",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      },
    );

    // gsap.from('nav' ,{opacity:0 , duration:1 , xPercent:100 , ease:"power1.inOut"})
  }, []);

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/SV.png" alt="SV_LOGO" className="w-16" />
          <p className="font-lexend text-white text-xl md:text-3xl">SHIVIK</p>
        </a>

        <ul className="flex  gap-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>
                <p className=" "> {link.title}</p>
              </a>
            </li>
          ))}
        </ul>

        <button className="flex items-center hover:text-black hover:scale-105 transition-transform duration-200 hover:bg-white">
          Get Quote <img src={img} className="w-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
