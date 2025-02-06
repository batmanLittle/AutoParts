import "./Contacts.css";
import iconYoutube from "../../images/icon-youtube.svg";
import iconVk from "../../images/icon-vk.svg";
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <div className="contacts">
      <div className="container">
        <div className="contacts__c">
          <div className="contacts__map-container">
            <iframe
              title="Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=37.6692%2C55.7411%2C37.6692%2C55.7411&amp;layer=mapnik&amp;marker=55.7411%2C37.6692"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen
            ></iframe>
          </div>
          <div className="contacts__c-block">
            <div className="contacts__info">
              <div className="contacts__info-top">
                <p className="txt-sans60">Контакты</p>
              </div>
              <table>
                <tbody className="contacts__info-table">
                  <tr className="contacts__info-row">
                    <td className="txt-sans16 contacts__info-label">Адрес:</td>
                    <td className="txt-sans18 contacts__info-value">
                      Москва, ул. Талалихина, 41 ст.2
                    </td>
                  </tr>
                  <tr className="contacts__info-row">
                    <td className=" txt-sans16 contacts__info-label">
                      Телефон
                    </td>
                    <td className="txt-sans18 contacts__info-value">
                      8 (499) 110-07-28
                    </td>
                  </tr>
                  <tr className="contacts__info-row contacts__info-row_imgs">
                    <td className=" txt-sans16 contacts__info-label">
                      Социальные сети:
                    </td>
                    <td className=" contacts__info-value contacts__info-value_imgs">
                      <Link to="#">
                        {" "}
                        <img alt="иконка ютуб" src={iconYoutube} />
                      </Link>
                      <Link to="#">
                        {" "}
                        <img alt="иконка вконтакте" src={iconVk} />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
