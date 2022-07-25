import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderSection } from "./style/HeadStyle";

function Header({ agent, now, setNow }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setisOpen] = useState(false);
  const [isWhite, setIsWhite] = useState(false);
  const [isBlack, setisBlack] = useState(false);

  useEffect(() => {
    const root = document.getElementById("root");
    function change(e) {
      const top = root.scrollTop;
      if (location.pathname === "/") {
        if (agent === "pc") {
          if (top > 1548) {
            setIsWhite(true);
          } else {
            setIsWhite(false);
          }
        }
        if (agent === "tablet") {
          if (top > 849) {
            setIsWhite(true);
          } else {
            setIsWhite(false);
          }
        }
        if (agent === "mb") {
          if (top > 984) {
            setIsWhite(true);
          } else {
            setIsWhite(false);
          }
        }
      }
      if (location.pathname === "/about") {
        if (now === 1) {
          if (agent === "pc") {
            if (top > 1087) {
              setIsWhite(true);
            } else {
              setIsWhite(false);
            }
          }
          if (agent === "tablet") {
            if (top > 755) {
              setIsWhite(true);
            } else {
              setIsWhite(false);
            }
          }
          if (agent === "mb") {
            if (top > 1379) {
              setIsWhite(true);
            } else {
              setIsWhite(false);
            }
          }
        }
      }
    }
    root.addEventListener("scroll", change);
    return () => {
      root.removeEventListener("scroll", change);
    };
  }, [location, agent, now]);

  useEffect(() => {
    const root = document.getElementById("root");
    root.scrollTo(0, 0);
    if (location.pathname === "/about") {
      if (now === 0) {
        setIsWhite(true);
      }
      if (now === 1) {
        setIsWhite(false);
      }
      if (now === 2) {
        setisBlack(true);
        setIsWhite(false);
      } else {
        setisBlack(false);
      }
    } else {
      setIsWhite(false);
      setisBlack(false);
    }

    return () => {};
  }, [location, now]);

  return (
    <HeaderSection
      open={isOpen}
      iswhite={isWhite}
      location={location.pathname}
      isBlack={isBlack}
      style={
        location.pathname === "/contact" && !isOpen
          ? {
              backgroundColor: "#F9F9F9",
            }
          : (location.pathname.includes("portfolio") ||
              location.pathname === "/showroom") &&
            !isOpen
          ? {
              backgroundColor: "white",
              border: "unset",
            }
          : undefined
      }
    >
      <div className="wrapper">
        <div
          className="logo"
          onClick={() => {
            navigate({ pathname: "/" });
          }}
        >
          <svg
            className="logo"
            viewBox="0 0 83 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_344_370)">
              <path
                d="M23.7948 0.0078125L12.7529 23.7892H23.7948V0.0078125Z"
                fill={
                  isOpen ||
                  isWhite ||
                  location.pathname === "/contact" ||
                  location.pathname === "/showroom" ||
                  location.pathname.includes("portfolio")
                    ? "black"
                    : "white"
                }
              />
              <path
                d="M1.8291 0.0078125L11.9117 21.774L22.0011 0.0078125H1.8291Z"
                fill={
                  isOpen ||
                  isWhite ||
                  location.pathname === "/contact" ||
                  location.pathname === "/showroom" ||
                  location.pathname.includes("portfolio")
                    ? "black"
                    : "white"
                }
              />
              <path
                d="M0 23.8097H11.0418L11.0004 23.7407L0 0.0214844V23.8097Z"
                fill={
                  isOpen ||
                  isWhite ||
                  location.pathname === "/contact" ||
                  location.pathname === "/showroom" ||
                  location.pathname.includes("portfolio")
                    ? "black"
                    : "white"
                }
              />
              <path
                d="M81.1645 0.00700963V0.0760463L71.0405 21.7939L60.8821 0.00700963H59.0808L59.1774 0.193354L66.7066 16.3213L64.1394 21.787L53.9809 0.00700963H52.1797L52.2763 0.193354L63.3181 23.809H65.0227V23.74L67.5761 18.2674L70.164 23.7883H71.8686V23.7193L82.9105 -0.0136719L81.1645 0.00700963Z"
                fill={
                  isOpen ||
                  isWhite ||
                  location.pathname === "/contact" ||
                  location.pathname === "/showroom" ||
                  location.pathname.includes("portfolio")
                    ? "black"
                    : "white"
                }
              />
              <path
                d="M28.3918 0.0078125H26.7217V23.8099H28.3918V0.0078125Z"
                fill={
                  isOpen ||
                  isWhite ||
                  location.pathname === "/contact" ||
                  location.pathname === "/showroom" ||
                  location.pathname.includes("portfolio")
                    ? "black"
                    : "white"
                }
              />
              <path
                d="M31.4141 0V23.8158H50.9719V22.2286H33.0841V17.6945H50.337V16.1073H33.0841V1.61489H50.4612V0.0276315L31.4141 0Z"
                fill={
                  isOpen ||
                  isWhite ||
                  location.pathname === "/contact" ||
                  location.pathname === "/showroom" ||
                  location.pathname.includes("portfolio")
                    ? "black"
                    : "white"
                }
              />
            </g>
            <defs>
              <clipPath id="clip0_344_370">
                <rect
                  width="83"
                  height="23.8158"
                  fill={
                    isOpen ||
                    isWhite ||
                    location.pathname === "/contact" ||
                    location.pathname === "/showroom" ||
                    location.pathname.includes("portfolio")
                      ? "black"
                      : "white"
                  }
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        {agent === "pc" ? (
          <nav>
            {location.pathname === "/" ? (
              navArr.map(({ title, link }, idx) => {
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      navigate({ pathname: link });
                    }}
                  >
                    {title}
                  </div>
                );
              })
            ) : location.pathname === "/about" ? (
              <>
                {aboutArr.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="nav-btn"
                      style={
                        idx === now
                          ? {
                              color: isWhite ? "#CD3325" : "white",
                              fontWeight: "bold",
                            }
                          : undefined
                      }
                      onClick={() => {
                        setNow(idx);
                      }}
                    >
                      {item}
                    </div>
                  );
                })}
                <div className="bar" style={{ left: `${now * 220}px` }} />
              </>
            ) : undefined}
          </nav>
        ) : (
          <>
            {location.pathname === "/about" && !isOpen ? (
              <nav>
                {aboutArr.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="nav-btn"
                      style={
                        idx === now
                          ? {
                              color: isWhite ? "#CD3325" : "white",
                              fontWeight: "bold",
                            }
                          : undefined
                      }
                      onClick={() => {
                        setNow(idx);
                      }}
                    >
                      {item}
                    </div>
                  );
                })}
                <div
                  className="bar"
                  style={{
                    left: `${agent === "tablet" ? now * 150 : now * 110}px`,
                  }}
                />
              </nav>
            ) : undefined}
            <div
              className={`${isOpen ? "cancel" : "menu"}`}
              onClick={() => {
                setisOpen(!isOpen);
              }}
            >
              {isOpen ? (
                <img src={`/assets/common/cancel.svg`} alt="" />
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1.25"
                    x2="20"
                    y2="1.25"
                    stroke={
                      isWhite ||
                      location.pathname === "/contact" ||
                      location.pathname === "/showroom" ||
                      location.pathname.includes("portfolio")
                        ? "black"
                        : "white"
                    }
                    strokeWidth="1.5"
                  />
                  <line
                    y1="10.25"
                    x2="20"
                    y2="10.25"
                    stroke={
                      isWhite ||
                      location.pathname === "/contact" ||
                      location.pathname === "/showroom" ||
                      location.pathname.includes("portfolio")
                        ? "black"
                        : "white"
                    }
                    strokeWidth="1.5"
                  />
                  <line
                    y1="19.25"
                    x2="20"
                    y2="19.25"
                    stroke={
                      isWhite ||
                      location.pathname === "/contact" ||
                      location.pathname === "/showroom" ||
                      location.pathname.includes("portfolio")
                        ? "black"
                        : "white"
                    }
                    strokeWidth="1.5"
                  />
                </svg>
              )}
            </div>
          </>
        )}
      </div>
      {agent !== "pc" ? (
        <nav className="menu-wrapper">
          <div className="wrapper">
            {navArr.map(({ title, link }, idx) => {
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setisOpen(!isOpen);
                    navigate({ pathname: link });
                  }}
                >
                  {title}
                </div>
              );
            })}
          </div>
        </nav>
      ) : undefined}
    </HeaderSection>
  );
}

export default Header;

const navArr = [
  {
    title: "MAIN",
    link: "/",
  },
  {
    title: "ABOUT",
    link: "/about",
  },
  {
    title: "PORTFOLIO",
    link: "/portfolio",
  },
  {
    title: "SHOWROOM",
    link: "/showroom",
  },
  {
    title: "CONTACT",
    link: "/contact",
  },
];
const aboutArr = ["WHO WE ARE", "ABOUT VIEW", "BUSINESS"];
