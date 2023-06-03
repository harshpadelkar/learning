import React, { useState, useEffect } from "react";
import { HiOutlineSearch, HiOutlineLogout } from "react-icons/hi";
import { BsFillCaretDownFill } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";
import userPlaceholder from "../../assets//user-placeholder.svg";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/learning-sphere.png";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { firebaseAuth } from "../../config/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { setUserNull } from "../../store/userSlice";
import { createNewUser } from "../../lib/client";

const Header = () => {
  const { user } = useSelector((state) => state.user);
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [query, setQuery] = useState("");
  const [showMainMenu, setShowMenMenu] = useState(false);
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();

  const signInWithGmail = async () => {
    try {
      await signInWithRedirect(firebaseAuth, provider).then((result) => {
        console.log(result);
        createNewUser(result?.user?.providerData[0]).then(() => {
          console.log("New user Created");
          dispatch(setUser(result?.providerData[0]));
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    await firebaseAuth.signOut().then(() => {
      dispatch(setUserNull());
      toggleMenMenu();
      navigate("/", { replace: true });
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      });
    }
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const toggleMenMenu = () => {
    setShowMenMenu((state) => !state);
  };

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="learningsphere logo" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ul className="menuItems">
            <li className="menuItem">
              <HiOutlineSearch onClick={openSearch} />
            </li>
          </ul>

          <div className="mobileMenuItems">
            <HiOutlineSearch
              style={{ height: "25px", width: "25px" }}
              onClick={openSearch}
            />
          </div>

          {!user ? (
            <li
              style={{
                position: "relative",
                listStyle: "none",
              }}
              className="menuItem"
              onClick={signInWithGmail}
            >
              <img
                style={{
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                  cursor: "pointer",
                  background: "white",
                }}
                src={userPlaceholder}
                alt="user placeholder"
              />
            </li>
          ) : (
            <li
              style={{
                position: "relative",
                listStyle: "none",
              }}
              className="menuItem"
            >
              <img
                src={user?.image}
                style={{
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={toggleMenMenu}
                referrerPolicy="no-referrer"
              />

              <BsFillCaretDownFill
                onClick={toggleMenMenu}
                style={{
                  color: "white",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              />

              {showMainMenu && (
                <div
                  onMouseLeave={toggleMenMenu}
                  style={{
                    position: "absolute",
                    right: "0",
                    top: "12",
                    borderRadius: "10px",
                    width: "200px",
                    padding: "14px 12px",
                    background: "#173d77",
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "center",
                    gap: "12px",
                    flexDirection: "column",
                    color: "white",
                    textTransform: "capitalize",
                  }}
                >
                  <div>
                    <div
                      style={{
                        lineHeight: "1.3",
                        fontWeight: "400",
                        textTransform: "lowercase",
                      }}
                    >
                      <span style={{ textTransform: "uppercase" }}>S</span>igned
                      in as
                    </div>
                    <div>{user?.userName}</div>
                  </div>

                  <div
                    style={{
                      width: "100%",
                      height: "1px",
                      background: "#ffffff38",
                    }}
                  ></div>

                  <p style={{ cursor: "pointer" }}>My Courses</p>

                  <p style={{ cursor: "pointer" }}>Your learnings</p>

                  <div
                    style={{
                      width: "100%",
                      height: "1px",
                      background: "#ffffff38",
                    }}
                  ></div>

                  <p
                    onClick={logout}
                    style={{
                      textTransform: "capitalize",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      cursor: "pointer",
                    }}
                  >
                    <span>Logout</span>
                    <HiOutlineLogout style={{ margin: "0 auto" }} />
                  </p>
                </div>
              )}
            </li>
          )}
        </div>
      </ContentWrapper>
      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or tv show...."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
