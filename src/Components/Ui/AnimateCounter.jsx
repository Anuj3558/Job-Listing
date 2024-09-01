import React, { useEffect, useState, useRef } from "react";

const AnimatedCounter = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Refs for the counter section
  const counterSectionRef = useRef(null);

  // Function to increment counter with requestAnimationFrame
  const incrementCounter = (setCounter, maxValue) => {
    let start = null;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const increment = Math.min(Math.floor(progress / 30), maxValue);
      setCounter(increment);

      if (increment < maxValue) {
        window.requestAnimationFrame(animate);
      }
    };
    window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.disconnect(); // Stop observing once the animation is triggered
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (counterSectionRef.current) {
      observer.observe(counterSectionRef.current);
    }

    return () => {
      if (counterSectionRef.current) {
        observer.unobserve(counterSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (shouldAnimate) {
      incrementCounter(setCounter1, 10);
      incrementCounter(setCounter2, 100);
      incrementCounter(setCounter3, 80);
    }
  }, [shouldAnimate]);

  return (
    <div className="relative font-inter antialiased">
      <main
        className="relative min-h-[60vh] flex flex-col justify-center overflow-hidden"
        ref={counterSectionRef}
      >
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
          {/* Animated Number Counter */}
          <section className="grid gap-12 md:grid-cols-3 md:gap-16">
            {/* Block #1 */}
            <article>
              <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="20">
                  <defs>
                    <linearGradient
                      id="icon1-a"
                      x1="50%"
                      x2="50%"
                      y1="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#A5B4FC" />
                      <stop offset="100%" stopColor="#4F46E5" />
                    </linearGradient>
                    <linearGradient
                      id="icon1-b"
                      x1="50%"
                      x2="50%"
                      y1="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#EEF2FF" />
                      <stop offset="100%" stopColor="#C7D2FE" />
                    </linearGradient>
                  </defs>
                  <g fill="none" fillRule="nonzero">
                    <path
                      fill="url(#icon1-a)"
                      d="M20.625 0H9.375a9.375 9.375 0 0 0 0 18.75h11.25a9.375 9.375 0 0 0 0-18.75Z"
                      transform="translate(.885 .885)"
                    />
                    <path
                      fill="url(#icon1-b)"
                      d="M9.375 17.5A8.125 8.125 0 0 1 1.25 9.375 8.125 8.125 0 0 1 9.375 1.25 8.125 8.125 0 0 1 17.5 9.375 8.125 8.125 0 0 1 9.375 17.5Z"
                      transform="translate(.885 .885)"
                    />
                  </g>
                </svg>
              </div>
              <h2>
                <span className="flex tabular-nums text-slate-900 text-5xl font-extrabold mb-2">
                  {counter1.toLocaleString()}K+
                </span>
                <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">
                  Companies
                </span>
              </h2>
              <p className="text-sm text-slate-500">
                Many desktop publishing packages and web page editors now use
                Pinky as their default model text.
              </p>
            </article>
            {/* Block #2 */}
            <article>
              <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center -rotate-3 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19">
                  <defs>
                    <linearGradient
                      id="icon2-a"
                      x1="50%"
                      x2="50%"
                      y1="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#A5B4FC" />
                      <stop offset="100%" stopColor="#4F46E5" />
                    </linearGradient>
                    <linearGradient
                      id="icon2-b"
                      x1="50%"
                      x2="50%"
                      y1="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#E0E7FF" />
                      <stop offset="100%" stopColor="#A5B4FC" />
                    </linearGradient>
                  </defs>
                  <g fill="none" fillRule="nonzero">
                    <path
                      fill="url(#icon2-a)"
                      d="M5.5 0a5.5 5.5 0 0 0 0 11c.159 0 .314-.01.469-.024a15.896 15.896 0 0 1-2.393 6.759A.5.5 0 0 0 4 18.5h1a.5.5 0 0 0 .362-.155C7.934 15.64 11 11.215 11 5.5A5.506 5.506 0 0 0 5.5 0Z"
                    />
                    <path
                      fill="url(#icon2-b)"
                      d="M18.5 0a5.5 5.5 0 0 0 0 11c.159 0 .314-.01.469-.024a15.896 15.896 0 0 1-2.393 6.759.5.5 0 0 0 .424.765h1a.5.5 0 0 0 .363-.155C20.934 15.64 24 11.215 24 5.5A5.506 5.506 0 0 0 18.5 0Z"
                    />
                  </g>
                </svg>
              </div>
              <h2>
                <span className="flex tabular-nums text-slate-900 text-5xl font-extrabold mb-2">
                  {counter2.toLocaleString()}K+
                </span>
                <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">
                  Users
                </span>
              </h2>
              <p className="text-sm text-slate-500">
                Many desktop publishing packages and web page editors now use
                Pinky as their default model text.
              </p>
            </article>
            {/* Block #3 */}
            <article>
              <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                  <defs>
                    <radialGradient
                      id="icon3-a"
                      cx="68.15%"
                      cy="27.232%"
                      r="67.641%"
                      fx="68.15%"
                      fy="27.232%"
                    >
                      <stop offset="0%" stopColor="#E0E7FF" />
                      <stop offset="100%" stopColor="#A5B4FC" />
                    </radialGradient>
                  </defs>
                  <g fill="none" fillRule="nonzero">
                    <circle cx="13" cy="13" r="13" fill="url(#icon3-a)" />
                    <path
                      fill="#FFF"
                      d="M8 13a5 5 0 1 1 10 0 5 5 0 0 1-10 0ZM13 9a4 4 0 0 0-3.966 4.445l3.03-.808a1.125 1.125 0 1 1 1.872.003l3.03.808A4 4 0 0 0 13 9Z"
                    />
                  </g>
                </svg>
              </div>
              <h2>
                <span className="flex tabular-nums text-slate-900 text-5xl font-extrabold mb-2">
                  {counter3.toLocaleString()}K+
                </span>
                <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">
                  Total Placed
                </span>
              </h2>
              <p className="text-sm text-slate-500">
                Many desktop publishing packages and web page editors now use
                Pinky as their default model text.
              </p>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AnimatedCounter;
