import React, { Component } from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className="main-footer front">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>Location</h4>
                        <ul className="list-unstyled" >
                            <li>94 RACHAPROROB RD. PHAYATHAI, RACHATEVI, BANGKOK. 10400</li>
                            <li>TEL. 099-249-4442 </li>
                            <a>E-MAIL: </a><a href={URL = 'https://www.google.com/intl/th/gmail/about/'} className ='a'>tang263475963@gmail.com</a>
                            
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div>
                        <h4>|-COMPONENT | </h4>
                            <a href={'/blog/'} className ='a'>- Content</a><br/>
                            <a href={'/about/'} className ='a'>- About</a><br/>
                            <a href={'/contact/'} className ='a'>- Contact</a>
                        
                    </div>
                     {/* Column3 */}
                     <div>
                        <h4></h4>
                        <ul className="list-unstyled" > 
                        </ul>
                    </div>
                     {/* Column3 */}
                     <div>
                        <h4> -CONTACT</h4>
                        <ul className="list-unstyled" >
                        <li>กาญจนา กาสี ปวส.2</li>
                            <li>ตั้งปณิธาน จันทร์อยู่ ปวส.2</li>
                            <li>คอมพิวเตอร์โปรแกรมเมอร์</li> 
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <p className="col-sm">
                        WEB REACTBLOG ! | ALL Right reserved | WEB-BLOG
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Footer;

