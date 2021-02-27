import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="container">
        <header className="header">
            <h1 className="title">Vegetables</h1>
            <div className="header_icn">
                <img className="icn_fb" src="images/btn_facebook.png" alt="fb"/>
                <img className="icn_ig" src="images/btn_instagram.png" alt="ig"/>
                <div className="header_line"></div>
                <div className="box_login">
                  <p className="login">LOGIN</p>
                </div>
                <div className="box_join">
                  <p className="join">JOIN</p>
                </div>
            </div>
        </header>

        <nav className="nav">
            <ul className="nav_list">
                <li className="nav_list_item">Home</li>
                <li className="nav_list_item">About Us</li>
                <li className="nav_list_item">Vegetables</li>
                <li className="nav_list_item">Online</li>
                <li className="nav_list_item">Contact</li>
            </ul>
        </nav>
        
        <img className="main_picture" src="images/img_main_pumpkin.png" alt="pumpkin"/>

        <article className="article">
            <div className="vegetables">
                <h2 className="vegetables_title">Vegetables</h2>  
                <div className="vegetables_img">
                    <img src="images/img_vegetables_pepper.png" alt="pepper"/>
                    <img src="images/img_vegetables_carrot.png" alt="carrot"/>
                    <img src="images/img_vegetables_corn.png" alt="corn"/>
                </div>  
            </div>

            <div className="contact">
                <h2 className="contact_title">Contact</h2>
                <div className="contact_box">
                    <p className="contact_word1">For any questions or suggestions about Vegetables, Vegetables Club or your online order you can contact Vegetables Customer Service by phone, email or post and we’ll be happy to help.</p>
                    <div className="contact_line"></div> 
                    <p className="contact_word2">
                        E-mail : Vegetables@aaabbccc.com
                        <br/>
                        PHONE : +886-123-456-789
                    </p>
                </div>
            </div>
           
        </article>
      </div>
      <footer className="footer">
        <p className="footer_word">Copyrights 2017 Vegetables cise / Design by Vegetables</p>
      </footer>
    </div>
  );
}

export default App;
