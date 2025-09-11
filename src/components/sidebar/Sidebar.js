import React from "react";
import Logo from "../logo/Logo";
import MyAvatar from "../../assets/images/my-avatar.png";
import InfoTile from "../info-tile/InfoTile";

export default function sidebar() {
    
    const contactlists = [
  {icon :'mail-outline',title:'Email',value:'m.zeeshansarfraz001.com' ,link:''},
  {icon :'phone-potrait-outline',title:'Phone',value:'(+92) 352-2795',tel:'+12133522795'},
  {icon :'calender-outline',title:'Birthday',value:'Oct 10, 2003',link:''},
  {icon :'location-outline',title:'Location',value:'Gulfshan Colony,Jang Road,Faisalabad' ,link:''},
    ]
  
  return (
    <aside className="sidebar active" data-sidebar>

      <div className="sidebar-info">

        <Logo Logo={MyAvatar}  customClass="avatar-box"/>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">M.Zeeshan Sarfraz</h1>

          <p className="title">Web developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <ion-icon name="chevron-down"></ion-icon>
        </button>

      </div>

      <div className="sidebar-info_more">

        <div className="separator"></div>

        <ul className="contacts-list">

          {contactlists?.map((contact, index) => {
            return <InfoTile key={index} contact={contact} />
          }
          )}

        </ul>

        <div className="separator"></div>

        <ul className="social-list">

          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

        </ul>

      </div>

    </aside>
  )
}