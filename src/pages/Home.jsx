import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import TypingAnimation from "../components/typingAnimation";
import { ArrowDownTrayIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const Home = ({ isDarkMode }) => {
  const myImageLight = "/img/rap-light.png";
  const instagramIcon = "../img/svg/instagram.svg";
  const linkedinIcon = "../img/svg/linkedin.svg";
  const githubIcon = "../img/svg/github.svg";
  const myImageDark = "/img/rap-dark.png";
  const [isVisible, setIsVisible] = useState(true);
  const imageSource = isDarkMode ? myImageDark : myImageLight;
  const textColor = isDarkMode ? "text-white" : "text-secondary";
  const highlightColor = "text-cyan-400";
  const hoverColor = isDarkMode ? "hover:text-white" : "hover:text-secondary";
  const socialButtonColor = isDarkMode
    ? "text-white border-white"
    : "button-secondary";

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop < 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDownloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/1iZ0sOfwZ8ZWm1Sxk3Ay-3wAFIZo0Xxb-/view?usp=drive_link",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <>
      <section id="home" className="min-h-screen flex flex-col relative">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 w-full lg:mt-20">
          <motion.div
            className="col-span-1 flex items-center justify-center xl:items-center xl:justify-start p-6"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="flex flex-col items-center justify-center xl:items-start lg:justify-start">
              <h4
                className={`text-xl sm:text-2xl lg:text-4xl font-medium ${textColor}`}
              >
                HI, WELCOME
              </h4>
              <h1
                className={`text-5xl md:text-6xl  lg:text-8xl font-bold ${textColor}`}
              >
                I'M{" "}
                <span
                  className={`text-5xl md:text-6xl lg:text-8xl font-bold ${highlightColor}`}
                >
                  ALDI
                </span>
              </h1>
              <TypingAnimation />
              <div className="flex items-center mb-4 gap-3">
                <a
                  href="https://www.instagram.com/m.by__rap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className={`rounded-full border-2 ${socialButtonColor} hover:border-cyan-400 p-3`}
                    variant="outlined"
                  >
                    <img
                      src={instagramIcon}
                      className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 ${socialButtonColor}`}
                      alt="Instagram Icon"
                    />
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/rinaldi-a-prayuda/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className={`rounded-full border-2 ${socialButtonColor} hover:border-cyan-400 p-3`}
                    variant="outlined"
                  >
                    <img
                      src={linkedinIcon}
                      className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14"
                      alt="LinkedIn Icon"
                    />
                  </Button>
                </a>
                <a
                  href="https://github.com/rapsign"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className={`rounded-full border-2 ${socialButtonColor} hover:border-cyan-400 p-3`}
                    variant="outlined"
                  >
                    <img
                      src={githubIcon}
                      className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14"
                      alt="GitHub Icon"
                    />
                  </Button>
                </a>
              </div>

              <Button
                onClick={handleDownloadCV}
                size="md"
                className={`flex items-center my-2 gap-3  text-gray-900 bg-cyan-400 ${hoverColor}`}
              >
                Download CV{" "}
                <ArrowDownTrayIcon className="w-4 h-4 lg:h-6 lg:w-6" />
              </Button>
            </div>
          </motion.div>
          <div className="flex flex-col items-center justify-center xl:items-end xl:justify-end">
            <motion.div
              className="text-center mt-auto"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src={imageSource}
                alt="My Image"
                className="max-w-full h-auto p-0"
                style={{ maxHeight: "100vh", maxWidth: "100%" }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center">
        {isVisible ? (
          <div className="flex justify-center z-100 absolute bottom-5 animate-bounce transition-opacity duration-1000 ease-in-out">
            <Link to="about" smooth={true} duration={500}>
              <Button className={`rounded-full p-6 bg-cyan-400 ${hoverColor}`}>
                <span className="flex items-center text-[#3a3a3c]">
                  <span className="mr-2 ">Scroll Down For More</span>
                  <ChevronDownIcon className="w-5 h-5" />
                </span>
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex justify-center z-100 absolute bottom-5 opacity-0 transition-opacity duration-1000 ease-in-out">
            <Link to="about" smooth={true} duration={900}>
              <Button className={`rounded-full p-5 bg-cyan-400 ${hoverColor}`}>
                <span className="flex items-center text-[#3a3a3c]">
                  <span className="mr-2 ">Scroll Down For More</span>
                  <ChevronDownIcon className="w-5 h-5" />
                </span>
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
