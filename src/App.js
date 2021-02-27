//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
        <header className="header">
            <a href="index.html">
                <img className="logo" src="images/logo.png" alt="GEGEU3U"/>
            </a>
            <div className="contact">
                <a href="https://www.instagram.com/define_twoowl_3g/?hl=zh-tw" target="_blank">
                    <img className="contact_icon" src="images/icn_ig.png" alt="ig"/>
                </a>
                <a href="https://www.facebook.com/groups/1517468085196003" target="_blank">
                    <img className="contact_icon" src="images/icn_fb.png" alt="fb"/>
                </a>
                <a href="https://www.youtube.com/channel/UCmej5oymLBhl8X3TGrd7JKg/" target="_blank">
                    <img className="contact_icon" src="images/icn_yt.png" alt="yt"/>
                </a>
            </div>
            <div className="header_ripple">
                <div className="HOVER">
                    <span></span>
                </div>
            </div>
            <div className="navbar_bg">
                <nav className="navbar navbar-expand-lg postiion-sticky">
                    <button className="navbar-toggler third-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent22" aria-controls="navbarSupportedContent22" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="animated-icon3"><span></span><span></span><span></span></div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent22">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="index.html">HOME</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link">TOUR</a>
                                <div className="dropdown-content">
                                    <a href="tour.html">花蓮</a>
                                    <a href="aboutUs.html">台南</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#">LIFESTYLE</a>
                                <div className="dropdown-content">
                                    <a href="lifestyle.html">ㄍㄟㄍㄟの文</a>
                                    <a href="lifestyle3.html">小於三の圖</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="aboutUs.html">ABOUT US</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <article className="article">
            <div id="nanogallery2"></div>
        </article>
        <footer className="footer">
            <h2 className="footer_ge3">ㄍㄟㄍㄟ小於三</h2>
            <p className="footer_word">歡迎分享，請標明出處</p>
            <p className="footer_word footer_margin">SINCE 2020</p>
        </footer>
    </div>
  );
}

export default App;
