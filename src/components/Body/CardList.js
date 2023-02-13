import React from "react";
import plug from "../../Assets/icon-plug.png";
import shopping from "../../Assets/icon-shopping.png";
import setting from "../../Assets/icon-setting.png";
import notprofile from "../../Assets/icon-not-profile.png";
import "../Body/Homepage.css";
import { useSelector } from "react-redux";


const CardAccount = () => {
  const { user } = useSelector((state) => state.auth);

  console.log("last login body:", user.user.lastLoginAt)

  return (
    <div className="CardAccount">
      <div className="account-img-group">
        <img className="card-account-img" src={notprofile}></img>
      </div>
      <div className="card-firma-adi">Posta Güvercini Ltd. Şti.</div>
      <div className="card-user-name">User Ad Soyad</div>
      <div className="btn-account-group">
        <button className="btn-account">
          <img className="icon-account" src={plug}></img>
          Partnership
        </button>
        <button className="btn-account">
          <img className="icon-account" src={setting}></img>
          Account Settings
        </button>
      </div>
    </div>
  );
};
const CardLoginLog = () => {
  return (
    <div className="card-login-log">
      <div className="last-login">Last Successful Login</div>
      <div className="last-login">Time 10.02.2023 15:40</div> {/* Login olduğu zamanı ekle*/}
      <div className="last-login">Last Failed Login</div>
      <div className="last-login"> - Time</div>
      {/* girişte hata yapmışsa tarihi logdan cek ekle */}
    </div>
  );
};
const CardTechnology = () => {
  return (
    <div className="card-technology">
      <div className="card-technology-header">Technology for you</div>
      <div className="card-technology-message">
        Figensoft offers worldwide services thanks to its international offices
        and global businnes partnerships with its messaging services and payment
        systems.
      </div>
    </div>
  );
};
const CardMessage = () => {
  return (
    <div className="card-message-blog">
      <div className="card-message-text">
        <p>
          According to the law No. 6563, which entered into force as of May 1,
          2015, it is the legal cell of commercial purpose expectations to give
          the right to refuse to send a message in each commercial electroniic
          message. Those who do this can be fined between 2.000 and 15.000
          liras.(article 12, paragraph 1, subpargraph c)
        </p>
      </div>
    </div>
  );
};
{
  /* Benzer  şekilde 10 Farklı hizmet Card. Databaseden Çekilebilir Array 
    Hizmet ürünü sepete eklenmiş ise Sepet butonu gizle*/
}
const CardBulkSMS = () => {
  return (
    <div className="products">
      <div className="product-sms">
        <img className="card-product-img" src=""></img>
        <div className="card-product-header">Bulk SMS</div>
        <div className="card-product-description">
          Reach your audiences by sending SMS
        </div>
        <div className="btn-shopping-group">
          <button className="btn-shopping">
            <div className="btn-top-line"></div>
            <img className="product-shopping-icon" src={shopping}></img>
          </button>
        </div>
      </div>
    </div>
  );
};
const CardContacts = () => {
  return (
    <div className="products">
      <img className="card-product-img" src=""></img>
      <div className="card-product-header">Contacts</div>
      <div className="card-product-description">
        Easily manage your contacts
      </div>
      <div className="btn-shopping-group-contacts">
        <button className="btn-shopping">
          <div className="btn-top-line"></div>
          <img className="product-shopping-icon" src={shopping}></img>
        </button>
      </div>
    </div>
  );
};
const CardEmail = () => {
  return (
    <div className="products">
      <img className="card-product-img" src=""></img>
      <div className="card-product-header">Email</div>
      <div className="card-product-description">
        Send your bulk e-mails quickly
      </div>
      <div className="btn-shopping-group-email">
        <button className="btn-shopping">
          <div className="btn-top-line"></div>
          <img className="product-shopping-icon" src={shopping}></img>
        </button>
      </div>
    </div>
  );
};
const CardMMS = () => {
  return (
    <div className="products">
      <img className="card-product-img" src=""></img>
      <div className="card-product-header">MMS</div>
      <div className="card-product-description">
        Easily send multimedia messages to your customers
      </div>
      <div className="btn-shopping-group-mms">
        <button className="btn-shopping">
          <div className="btn-top-line"></div>
          <img className="product-shopping-icon" src={shopping}></img>
        </button>
      </div>
    </div>
  );
};
const CardIntegration = () => {
  return (
    <div className="products">
      <img className="card-product-img" src=""></img>
      <div className="card-product-header">Integration</div>
      <div className="card-product-description">
        Integrate your systems with our comprehensive APIs
      </div>
      <div className="btn-shopping-group-integration">
        <button className="btn-shopping">
          <div className="btn-top-line"></div>
          <img className="product-shopping-icon" src={shopping}></img>
        </button>
      </div>
    </div>
  );
};
const CardConsentManagement = () => {
  return (
    <div className="products">
      <div className="product-management">
        <img className="card-product-img" src=""></img>
        <div className="card-product-header">Consent Management</div>
        <div className="card-product-description">
          Manage your KVVK ETK consents
        </div>
        <div className="btn-shopping-group-consent-management">
          <button className="btn-shopping">
            <div className="btn-top-line"></div>
            <img className="product-shopping-icon" src={shopping}></img>
          </button>
        </div>
      </div>
    </div>
  );
};
const CardOnlineConsent = () => {
  return (
    <div className="products">
      <img className="card-product-img" src=""></img>
      <div className="card-product-header">Online Consent</div>
      <div className="card-product-description">
        Collect consents from your customers electronically
      </div>
      <div className="btn-shopping-group-online-consent">
        <button className="btn-shopping">
          <div className="btn-top-line"></div>
          <img className="product-shopping-icon" src={shopping}></img>
        </button>
      </div>
    </div>
  );
};
const CardSurvey = () => {
  return (
    <div className="products">
      <img className="card-product-img" src=""></img>
      <div className="card-product-header">Survey</div>
      <div className="card-product-description">
        Create advanced surveys and collect data
      </div>
      <div className="btn-shopping-group-survey">
        <button className="btn-shopping">
          <div className="btn-top-line"></div>
          <img className="product-shopping-icon" src={shopping}></img>
        </button>
      </div>
    </div>
  );
};
const CardHelpDesk = () => {
  return (
    <div className="products">
      <img className="card-product-img" src=""></img>
      <div className="card-product-header">Help Desk</div>
      <div className="card-product-description">
        Manage your tickets, support your customers easily
      </div>
      <div className="btn-shopping-group-helpdesk">
        <button className="btn-shopping">
          <div className="btn-top-line"></div>
          <img className="product-shopping-icon" src={shopping}></img>
        </button>
      </div>
    </div>
  );
};
const CardKnowledgeBase = () => {
  return (
    <div className="products">
      <img className="card-product-img" src=""></img>
      <div className="card-product-header">Knowledge Base</div>
      <div className="card-product-description">
        Gather your information system on a single solution
      </div>
      <div className="btn-shopping-group-knowledge">
        <button className="btn-shopping">
          <div className="btn-top-line"></div>
          <img className="product-shopping-icon" src={shopping}></img>
        </button>
      </div>
    </div>
  );
};

export const CardList = () => {
  return (
    <div className="card-list-body">
      <div className="card-sidebar">
        <CardAccount />
        <CardLoginLog />
        <CardTechnology />
      </div>
      <div className="card-product-menu">
        <div>
          <CardMessage />
        </div>
        <div className="card-product-5">
          <CardBulkSMS />
          <CardContacts />
          <CardEmail />
          <CardMMS />
          <CardIntegration />
        </div>
        <div className="card-product-10">
          <CardConsentManagement />
          <CardOnlineConsent />
          <CardSurvey />
          <CardHelpDesk />
          <CardKnowledgeBase />
        </div>
      </div>
    </div>
  );
};
