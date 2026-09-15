import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import React, { useRef } from "react";

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile =
    typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;

    useGSAP(()=> {
        const split = new SplitText('#hero h1' , {type:"words"}) ;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.from(split.words, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.1,
      duration: 1,
      ease: "power1.inOut",
    });
    gsap.from("#hero p", {
      opacity: 0,
      xPercent: -10,
      duration: 1,
      ease: "power1.inOut",
    });

    gsap.fromTo(
      "#hero h3",
      { opacity: 0, xPercent: -40 },
      { opacity: 1, duration: 1, ease: "power1.inOut", xPercent: 0 },
    );

    const startval = isMobile ? "top 50%" : "center 60%";
    const endval = isMobile ? "120% top" : "bottom top";

    const scrollTimer = gsap.timeline({
      scrollTrigger: {
        trigger: ".video",
        start: startval,
        end: endval,
        scrub: true,
        // pin: true,
      },
    });
    const video = videoRef.current;
    if (!video) return;

    const bindScrub = () => {
      scrollTimer.to(video, { currentTime: video.duration });
    };

    if (video.readyState >= 1) {
      bindScrub();
    } else {
      video.onloadedmetadata = bindScrub;
    }
  }, []);

  return (
    <>
      <div
        className="bg-cover h-screen bg-center "
        style={{
          backgroundImage:
            "linear-gradient(to left, transparent, rgba(0,0,0,0.8)),url('/images/hero-bg.jpg')",
        }}
      >
        <section id="hero" className=" mx-14 relative z-10">
          <p className="font-HeptaSlab  text-gradient">
            Premium Aluminium Composite Panels
          </p>
          <h1
            className="center text-white mt-14 mb-28 text-gradient"
            id="title"
          >
            Surfaces that Define <br />
            <span className=" ">Architecture</span>
          </h1>

          <div className="content ">
            <h3 className="text-amber-200 font-lexend text-4xl w-[60%]  md:mt-10">
              Premium Aluminum Composite Panels and architectural façade
              solutions for modern buildings, interiors, signage, and commercial
              spaces.
            </h3>

            <div className="">
              <button className="bg-white  ">Explore Products</button>
              <button className="bg-black text-white">Get Quote</button>
            </div>
          </div>
        </section>
      </div>

      <div className="video relative w-full h-screen">
        <video
          src="/video/bg.mp4"
          playsInline
          ref={videoRef}
          loop
          muted
          preload="auto"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default Hero;
