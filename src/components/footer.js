import React from 'react';
import styling from 'styled-components';

export default function footer() {
    return (
        <FooterWrapper>
            <div className="footer">
                <ul className="impressum">
                    <li><a href="./contact.html">Kontakt</a></li>
                    <li><a href="./impressum.html">Impressum</a></li>
                    <li><a href="./datenschutz.html">Datenschutz</a></li>
                    
                </ul>
            
                <div className="social_media">
                    <p>Folge mir auf      &nbsp;  </p>
                    <a href="https://www.instagram.com/wombat.design/?hl=de">
                        <img src="../img/insta_icon.png" alt="wombat_logo"/>
                    </a>
                </div>
            </div>
        </FooterWrapper>
    )
}
const FooterWrapper = styling.nav`
.footer {
    position: relative;
    display: flex;
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
    text-align: center;
    background: var(--wombatGreen);
    
  }
  .footer .impressum{
    display: flex;
    list-style: none;
    text-decoration: none;
    justify-content: space-around;
    align-items: center;
    margin-right: auto;
  }
  
  .footer .impressum li a{
    color: white;
    text-decoration: none;
    font-size: 16px;
    margin-left:20px; 
  }

  .footer .social_media{
    display: flex;
    list-style: none;
    align-items: center;
    margin-right:20px;
   
  }
  .footer img{
    margin-bottom: 5px;
    width: 20px;
    height: 20px;
  }
  @media screen and (max-width: 768px){
      .social_media p{
          opacity:0;
      }
  }
`
