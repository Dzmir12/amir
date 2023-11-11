import Button from "@mui/material-next/Button";
import me from "./../../assets/me.jpg";
import style from "./Header.module.css";
import { useMediaQuery } from "react-responsive";
import CV from './../../assets/AmirAbdi_Resume.pdf'


function Header() {
  const isWeb = useMediaQuery({ query: "(max-width: 1275px)" });
  const isWeb2 = useMediaQuery({ query: "(max-width: 987px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 529px)" });

  return (
    <div className={style.header}>
      <div
        className={` ${
          isWeb ? style.headerContainerFixed : style.headerContainer
        } ${isWeb2 ? style.headerContainerFixed2 : style.headerContainer}`}
      >
        <div
          className={` ${
            isWeb2 ? style.headerIntroduceFixed : style.headerIntroduce
          }`}
        >
          <h2
            className={` ${isWeb ? style.headerH2Fixed : style.headerH2} ${
              isWeb2 ? style.headerH2Fixed2 : style.headerH2
            } ${isMobile ? style.headerH2Fixed3 : style.headerH2} `}
          >
            Hello!
          </h2>
          <div
            className={`${isWeb2 ? style.wrapperFixed : style.wrapper} ${
              isMobile ? style.wrapperFixed2 : style.wrapper
            }`}
          >
            <div
              className={` ${isWeb ? style.staticTxtFixed : style.staticTxt} ${
                isWeb2 ? style.staticTxtFixed2 : style.staticTxt
              } ${isMobile ? style.staticTxtFixed3 : style.staticTxt}`}
            >
              I,m
            </div>
            <ul className={style.dynamicTxt}>
              <li
                className={` ${isWeb ? style.headerLiFixed : style.headerLi} ${
                  isWeb2 ? style.headerLiFixed2 : style.headerLi
                } ${isMobile ? style.headerLiFixed3 : style.headerLi}`}
              >
                <span>Amir</span>
              </li>
              <li
                className={` ${isWeb ? style.headerLiFixed : style.headerLi} ${
                  isWeb2 ? style.headerLiFixed2 : style.headerLi
                } ${isMobile ? style.headerLiFixed3 : style.headerLi}`}
              >
                <span>Coder</span>
              </li>
            </ul>
          </div>

          <div className={` ${isWeb2 ? style.headerButtonFixed :style.headerButton } `}>
           <a href={CV} download>
            <Button
              color="primary"
              size="large"
              variant="filled"
              style={{ width: "30%", background: "#9ebeff" }}
            >
              CV
            </Button>
            </a>

            <a href="#Contact">
            <Button
              color="primary"
              size="large"
              variant="text"
              style={{ width: "30%" }}
            >
               Let's Talk
            </Button>
            </a>
          </div>
        </div>

        <div
          className={` ${
            isWeb2
              ? style.headerImageContainerFixed
              : style.headerImageContainer
          }`}
        >
          <div
            className={` ${
              isWeb2
                ? style.img1Fixed
                : style.img1
            }`}
          >
            <img
              src={me}
              className={` ${isWeb ? style.imageFixed : style.image}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
