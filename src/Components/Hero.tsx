import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

const Hero: React.FC = () => {

    useGSAP(()=> {
        const split = new SplitText('#hero h1' , {type:"words"}) ;

        const timeline = gsap.timeline({
            scrollTrigger:{
                trigger:'#hero',
                start:"top top",
                end:'bottom top',
                scrub:true ,
            }
        }) 

        gsap.from(split.words , {opacity:0 , yPercent:100 ,  stagger : 0.1 , duration : 1 , ease:'power1.inOut'})
        gsap.from('#hero p' , {opacity:0 , xPercent:-10 ,   duration : 1 , ease:'power1.inOut'})
    } ,[]) ;

  return (
    <div
      className="bg-cover bg-center "
      style={{
        backgroundImage:
          "linear-gradient(to left, transparent, rgba(0,0,0,0.8)),url('/images/hero-bg.jpg')",
      }}
    >
      <section id="hero" className="mx-14">
        <p className="font-HeptaSlab text-white text-gradient">
          Premium Aluminium Composite Panels
        </p>
        <h1 className="center text-white text-gradient" id="title">
          Surfaces that Define <br />
          <span className=" ">Architecture</span>
        </h1>




        <div className="content ">
            <h3 className="text-amber-200 font-lexend text-4xl w-[60%]  md:mt-10">Premium Aluminum Composite Panels and architectural façade solutions for modern buildings, interiors, signage, and commercial spaces.</h3>

            
        </div>
      </section>
    </div>
  );
};

export default Hero;
