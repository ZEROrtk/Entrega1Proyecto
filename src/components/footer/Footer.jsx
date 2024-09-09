import './Footer.css'
import React from "react"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import logo from '/Users/Administrator/avance/src/components/logo/logoz.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links"> 
          <div className="sb__footer-links-div">
           
            <img src={logo} alt="" />
          </div>
          <div className="sb__footer-links_div">
            <h4>Contacto</h4>
            <a href="/numero">
            <p>+56999775781</p>
            </a>
            <a href="/correo">
            <p>rtkam13@gmail.com</p>
            </a>
            
          </div>
      
          
          <div className="sb__footer-links_div">
              <h4>Companañía</h4>
              <a href="/sobre">
              <p>Acerca de nosotros</p>
              </a>
              
              <a href="/career">
              <p>Carrera</p>
              </a>
             
          </div>
          <div className="sb__footer-links_div">
            <h4>Proximamente</h4>
            <div className="socialmedia">
              <p><FaFacebook /></p>
              <p><FaInstagram /></p>
              <p><FaTwitter /></p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              @{new Date().getFullYear()} ZeroStore. Todos los derechos reservados
            </p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/terms"><div><p>Terminos y Condiciones</p></div></a>
            <a href="/privacidad"><div><p>Privacidad</p></div></a>
            <a href="/seguridad"><div><p>Seguridad</p></div></a>
            <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer;