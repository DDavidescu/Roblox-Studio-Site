// src/components/info/StudioScrollTrack.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/sections_scss/home_sections_scss/StudioScrollTrack/studio_scroll_track.scss";

gsap.registerPlugin(ScrollTrigger);

function StudioScrollTrack() {
  const sectionRef = useRef(null);
  const slidesWrapperRef = useRef(null);

  const slides = [
    {
      heading: "Lorem ipsum dolor sit amet.",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc id facilisis faucibus, risus lorem bibendum ex, id dignissim felis orci et augue."
    },
    {
      heading: "Pellentesque habitant morbi tristique.",
      body: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tempus, risus at maximus dictum, dui nulla efficitur justo."
    },
    {
      heading: "Suspendisse potenti integer feugiat.",
      body: "Suspendisse potenti. Integer feugiat, urna quis consequat varius, nibh enim sagittis arcu, vitae sagittis lacus mi sit amet lectus. Curabitur laoreet lorem at leo vestibulum."
    },
    {
      heading: "Curabitur non lorem in justo.",
      body: "Curabitur non lorem in justo ullamcorper volutpat. Mauris eget nisl vitae leo tincidunt blandit. Aliquam erat volutpat. Integer mollis lorem sed magna egestas, a dignissim enim varius."
    },
    {
      heading: "Vivamus vel nunc at sapien.",
      body: "Vivamus vel nunc at sapien gravida ultricies. Maecenas eget lorem a lectus vestibulum interdum. Donec gravida convallis nibh, a tempor turpis ullamcorper eu."
    }
  ];

  useEffect(() => {
    if (!sectionRef.current || !slidesWrapperRef.current) return;

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".studio-scroll__slide");

      if (!sections.length) return;

      const scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          start: "top top",
          end: () => "+=" + window.innerWidth * (sections.length - 1),
          anticipatePin: 1
        }
      });

      sections.forEach((slide) => {
        const heading = slide.querySelector(".studio-scroll__heading");
        const body = slide.querySelector(".studio-scroll__body");

        gsap.fromTo(
          [heading, body],
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: slide,
              containerAnimation: scrollTween,
              start: "left center",
              end: "right center",
              toggleActions: "play reverse play reverse"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="studio-scroll"
      id="inside-the-studio"
      ref={sectionRef}
    >
      <div className="studio-scroll__inner">
        <div className="studio-scroll__label">Lorem ipsum studio track</div>

        <div className="studio-scroll__viewport">
          <div
            className="studio-scroll__slides"
            ref={slidesWrapperRef}
          >
            {slides.map((slide, index) => (
              <article
                key={index}
                className="studio-scroll__slide"
              >
                <h2 className="studio-scroll__heading">{slide.heading}</h2>
                <p className="studio-scroll__body">{slide.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudioScrollTrack;
