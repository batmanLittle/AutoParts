import "./Support.css";
import carRght from "../../images/sup-car-rght.png";
import carLft from "../../images/sup-car-lft.png";
import phone from "../../images/icon-phone.svg";
import callCenter from "../../images/call-centr.png";

function Support() {
  return (
    <div className="support">
      <div className="support__c">
        <div className="support__c-img right">
          <img alt="машина" src={carLft} />
        </div>
        <div className="support__c-info">
          <div className="support__c-info-img">
            <img alt="колл-центр" src={callCenter} />
          </div>
          <p className="txt-sans18">Остались вопросы?</p>
          <div className="header__c-num-box support__c-num-box">
            <div className="header__c-num-icon">
              <img src={phone} alt="телефон" />
            </div>
            <p className="txt-sans20_bold">8 (499) 110-07-28</p>
          </div>
        </div>
        <div className="support__c-img left">
          <img alt="машина" src={carRght} />
        </div>
      </div>
    </div>
  );
}

export default Support;
