import logo from './logo.svg';
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
        <article>
            <div className="profile" id="profile">
                <h1 className="profile_word">PROFILE</h1>
                <picture>
                    <source srcset="img/img_3g_L.jpg" media="(min-width:992px)"/>
                    <img className="img_3g" src="img/img_3g_M.jpg" alt="img_3g"/>
                </picture>
            </div>
            <div className="intro">
                <div className="animate__animated animate__slideInLeft intro_box">
                    <span className="intro_img">
                        <span className="intro_img_inner">
                            <img className="intro_img_f" src="images/gege_f.jpg" alt="gege_front"/>
                            <img className="intro_img_b" src="images/gege_b.png" alt="gege_back"/>
                        </span>
                    </span>
                    <div className="intro_text">
                        <h1 className="intro_title">ㄍㄟㄍㄟ</h1>
                        <div>
                            <p className="intro_word">□□我是ㄍㄟㄍㄟ，幸會幸會！｡:.ﾟヽ(`g ´)ﾉﾟ.:｡<br/>
                                <br/>
                                時間，不能重演，<br/>
                                別將自己的夢想在腦中轉的殷切，<br/>
                                所以這天，我突圍，<br/>
                                去打破意志週期的輪迴，<br/>
                                就算路途旁的聲響無可避免。<br/>
                                期盼遇見…I am the man, who just wanna make some friends. Maybe YOU can.<br/>
                                <br/>
                                ㄜ……對，我只是把之前寫的改ㄌ些…<br/>
                                至於遇見…我想…已經有解…((被盯 Σ(`Д ´;<br/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="animate__animated animate__slideInRight intro_box shan_box">
                    <div className="intro_text shan_text">
                        <h1 className="intro_title">小於三</h1>
                        <div>
                            <p className="intro_word">
                                □□這裡是魚山 a.k.a 小於三<br/>
                                貼文的附圖大部分都是我畫的，<br/>
                                在ㄍㄟㄍㄟ的心靈雞湯洗禮之間(?<br/>
                                會不定時跟大家分享我們的有(ㄅㄚˋ)趣(ㄌㄧㄥˊ)日常٩(´8` *)و！<br/>
                                <br/>
                                大概是醬，那我先去找ㄍㄟㄍㄟ了～(๑´8`๑)/<br/>
                            </p>
                        </div>
                    </div>
                    <span className="intro_img">
                        <span className="intro_img_inner">
                            <img className="intro_img_f" src="images/shan_f.jpg" alt="shan_front"/>
                            <img className="intro_img_b" src="images/shan_b.png" alt="shan_back"/>
                        </span>
                    </span>
                </div>
            </div>
        </article>
        <div className="contact_us">
            <div className="contact_us_width">
                <h3 className="animate__animated animate__tada contact_word d-flex justify-content-center">
                    <strong>Contact&nbsp; us</strong>
                </h3>    
            </div>
        </div>
        <footer className="footer">
            <h2 className="footer_ge3">ㄍㄟㄍㄟ小於三</h2>
            <p className="footer_word">歡迎分享，請標明出處</p>
            <p className="footer_word footer_margin">SINCE 2020</p>
        </footer>
    </div>
  );
}

export default App;
