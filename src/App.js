//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <header className="header navbar_bg">
          <nav className="navbar navbar-expand-lg">
              <a className="logo navbar-brand" href="#">
                  <img className="img_logo" src="img/img_logo.png" alt="img_logo"/>
                  <span className="word_logo">LNG LIVE</span>
              </a>
              <button className="navbar-toggler third-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent22" aria-controls="navbarSupportedContent22" aria-expanded="false" aria-label="Toggle navigation">
                  <div className="animated-icon3"><span></span><span></span><span></span></div>
              </button>
              <div className="collapse navbar-collapse " id="navbarSupportedContent22">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="#">ABOUT</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">MEMBERS</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">VIDEOS</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">LINE STORE</a>
                    </li>
                  </ul>
              </div>
          </nav>
      </header>
      <picture>
          <source srcset="img/img_header_member_L.jpg" media="(min-width:992px)"/>
          <img className="img_member" src="img/img_header_member_M.png" alt="img_header_member"/>
      </picture>
      <article className="article">
        <div className="row content">
            <div className="content_ig col-12 col-sm-12 col-lg-6">
                <div className="title_flex">
                    <img className="content_icon" src="img/ic_ctn_ig.png" alt="ic_ctn_fb"/>
                    <h2 className="content_title">成員最新動態</h2>
                </div>
                <div className="ig_post overflow-auto">
                    <iframe className="instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CI0NZlXBkUa/embed/captioned/?cr=1&amp;v=13&amp;wp=540&amp;rd=http%3A%2F%2F127.0.0.1%3A5500&amp;rp=%2FLNG%2520LIVE%2Findex.html#%7B%22ci%22%3A0%2C%22os%22%3A169.00000000168802%2C%22ls%22%3A152.32000000105472%2C%22le%22%3A153.07000000029802%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="967" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" style="background: white; width: calc(100% - 2px); border-radius: 3px; border: 1px solid rgb(219, 219, 219); box-shadow: none; display: block; margin: 0px; padding: 0px; postition:relative;"></iframe>
                    <br/>
                    <iframe className="instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CIpPK8pg3P2/embed/captioned/?cr=1&amp;v=13&amp;wp=421&amp;rd=http%3A%2F%2F127.0.0.1%3A5500&amp;rp=%2FLNG%2520LIVE%2Findex.html#%7B%22ci%22%3A0%2C%22os%22%3A75.28500000080385%2C%22ls%22%3A72.50000000021828%2C%22le%22%3A73.30000000001746%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="899" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" style="background: white; width: calc(100% - 2px); border-radius: 3px; border: 1px solid rgb(219, 219, 219); box-shadow: none; display: block; margin: 0px; padding: 0px; postition:relative;"></iframe>                </div>
                </div>
            <div className="col-lg-1"></div>
            <div className="content_fb col-12 col-sm-12 col-lg-5">
                <div className="title_flex">
                    <img className="content_icon" src="img/ic_ctn_fb.png" alt="ic_ctn_ig"/>
                    <h2 className="content_title">每月開台時間</h2>
                </div>
                <iframe className="fb_post" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLNG.live.official%2Fposts%2F3486877628048777&show_text=true&width=552&height=186&appId" height="186" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; encrypted-media; picture-in-picture;"></iframe>
                <iframe className="fb_post" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLNG.live.official%2Fposts%2F3358376914232183&show_text=true&width=552&height=186&appId" height="186" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; encrypted-media; picture-in-picture;"></iframe>
                <iframe className="fb_post" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLNG.live.official%2Fposts%2F3225656160837593&show_text=true&width=552&height=158&appId" height="158" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; encrypted-media; picture-in-picture;"></iframe>
            </div>
        </div>
      </article>
      <footer className="footer">
          <div className="row footer_in">
              <p className="col-sm-7 col-12 align-self-center">Copyright © 2020 LNG Live. All rights reserved.</p>
              <div className="footer_icn_align col-sm-5 col-12 align-self-center">
                  <a href="#">
                      <img className="footer_icn" src="img/ic_footer_fb.png" alt="ic_footer_fb"/>
                  </a>
                  <a href="#">
                      <img className="footer_icn" src="img/ic_footer_yt.png" alt="ic_footer_yt"/>
                  </a>
                  <a href="#">
                      <img className="footer_icn" src="img/ic_footer_twitch.png" alt="ic_footer_twitch"/>
                  </a>
              </div>
          </div>
      </footer>
    </div>
  );
}

export default App;
