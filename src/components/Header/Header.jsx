import React from 'react'
import InfoSection from './InfoSection/InfoSection'
import MenuSection from './MenuSection/MenuSection'

const Header = () => {
  return (
    <>
      <div className="header-area header_area">
          <div className="main-header header-sticky sticky-bar">
            <div className="container-fluid">
              <div className="row align-items-center">
                <InfoSection/>
                <MenuSection/>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Header;
