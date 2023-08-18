import React,{useContext} from 'react';
import Img from '../img';
import "./style.css";
import { ThemeContext } from "../../hooks/useTheme";
export default function Index() {
  const themeColor = useContext(ThemeContext);

  return (
    <div className="ffrow">
      <section className="cards-two-container">
        <div className="cards card-0">
          <h2 style={{ textAlign: 'left' }}>last played</h2>
          <div className="innerRow">
          <div className={`innerInner card-${themeColor.theme}`}>
              <Img className="innerRowImage" width="70px" src="../../../assets/images/DYING LIGHT MINI.png" alt="" />
              <h6 className={`innerRowText text-${themeColor.theme}`}>Hogwarts Legacy 50%</h6>
            </div>
          </div>

          <div className="innerRow">
            <div className={`innerInner card-${themeColor.theme}`}>
              <Img className="innerRowImage" width="70px" src="../../../assets/images/f2b14737-116f-4416-b250-093597981967.png" alt="" />
              <h6 className={`innerRowText text-${themeColor.theme}`}>God Of War: Ragnarök 72.5%</h6>
            </div>
          </div>
          <div className="innerRow">
          <div className={`innerInner card-${themeColor.theme}`}>
              <Img className="innerRowImage" width="70px" src="../../../assets/images/MINI CRASH.png" alt="" />
              <h6 className={`innerRowText text-${themeColor.theme}`}>Crash Bandicoot N. Sane Trilogy 34%</h6>
            </div>
          </div>
          <div className="innerRow">
          <div className={`innerInner card-${themeColor.theme}`}>
              <Img className="innerRowImage" width="70px" src="../../../assets/images/DYING LIGHT MINI.png" alt="" />
              <h6 className={`innerRowText text-${themeColor.theme}`}>Dying Light 2 Stay Human 100%</h6>
            </div>
          </div>
        </div>

        <div className="cards card-01">
          <Img className={"ll"} src="../../../assets/images/uncharted/png-clipart-disgaea-3-playstation-3-playstation-4-xbox-360-trophy-golden-cup-game-medal 1.png" alt="" />
          <Img  className={"underLogo"} src="../../../assets/images/uncharted/t.png" alt="" />
           <div className="con">
           <p>assassin's creed odyssey</p>
           <p>last played: 34 hours ago</p>
           </div>
        </div>
        <div className="cards card-02"></div>
      </section>
    </div>
  );
}