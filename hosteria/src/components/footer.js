import React, { Component } from "react";
import { FaFacebookF,FaTwitter,FaYoutube,FaInstagram,FaBlogger} from "react-icons/fa";
import "../Css/footer.css";
export default class Footer extends Component {
    render() {
        return (
            <section class="footer1 cid-qJ3OvXSQuM" id="footer1-6s">
              <div className="container">
                  <div class="row justify-content-center mbr-white">
                          <div class="col-md-6 first-column col-lg-4">
                                <h2 class="mbr-section-title mbr-fonts-style pb-2 display-5">Contáctenos</h2>
                                <h3 class="mbr-section-subtitle mbr-fonts-style mbr-lighter display-4">Disponible las 24h</h3>
                                <p class="mbr-text mbr-fonts-style display-5"> +0959858891</p>
                          </div>
                          <div class="col-md-6 second-column col-lg-4">
                                <h2 class="mbr-section-title mbr-fonts-style pb-2 display-5">Siguenos </h2>
                                <h3 class="mbr-section-subtitle mbr-fonts-style mbr-lighter display-4">Redes sociales</h3>
                                <div class="icons-wrapper">
                                    <ul>
                                        <li>
                                            <a class="icon-transition" href="https://www.facebook.com/pages/Mobirise">
                                                <FaFacebookF />
                                            </a>
                                        </li>
                                        <li>
                                            <a class="icon-transition" href="https://twitter.com/mobirise">
                                                <FaTwitter />
                                            </a>
                                        </li>
                                        <li>
                                            <a class="icon-transition" href="https://www.youtube.com/c/mobirise">
                                                <FaYoutube />
                                            </a>
                                        </li>
                                        <li>
                                            <a class="icon-transition" href="https://www.instagram.com/mobirise/">
                                                <FaInstagram />
                                            </a>
                                        </li>
                                        <li>
                                            <a class="icon-transition" href="http://hosteriariosymontanas.blogspot.com/">
                                                <FaBlogger/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>    
                          </div> 
                          <div class="col-md-6 third-column col-lg-4">
                                <h2 class="mbr-section-title mbr-fonts-style pb-2 display-5">About us </h2>
                                
                          </div> 
                          <div class="col-12">
                                    <p class="mbr-text mb-0 mbr-fonts-style align-center display-7">
                                        © Copyright 2018 <a href="https://hosteriariosymontanas.com" class="text-primary">Mobirise</a> - All Rights Reserved
                                    </p>
                            </div>    
                    </div> 
               </div>
           </section>
            
        );
    }
}

