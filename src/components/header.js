import React, {Component} from 'react'
import Navbar from './navbar'

class Header extends Component {
  render (){
      return(
      <>
          {/* <!-- ======== @Region: #header ======== --> */}
        <div id="header">
          {/* <!--Header & Branding region--> */}
           <div className="header py-3 d-none d-lg-flex">
           
            {/* <!-- all direct children of the .header-inner element will be vertically aligned with each other you can override all the behaviours using the flexbox utilities (flexbox.html) All elements with .header-brand & .header-block-flex wrappers will automatically be aligned inline & vertically using flexbox, this can be overridden using the flexbox utilities (flexbox.htm) Use .header-block to stack elements within on small screen & "float" on larger screens use .order-first or/and .order-last classNamees to make an element show first or last within .header-inner or .headr-block elements --> */}
            <div className="header-inner container">
                {/* <!--branding/logo --> */}
                <div className="header-brand flex-column align-items-start">
                  <a className="header-brand-text" href="index.html" title="Home">
                    <h1 className="h2">
                      <span className="header-brand-text-alt">Gallery</span>Go<span className="header-brand-text-alt">.</span>
                    </h1>
                  </a>
                  <div className="header-slogan d-none d-lg-block text-xs font-weight-normal">
                    <em>Your Gallery Go-To</em>
                   
                  </div>
                  
              </div>
            {/* <!-- other header content --> */}
              <div className="header-block d-flex order-12 align-items-center">
                <a href="#search" className="btn btn-icon d-lg-none" data-toggle="className" data-target='{"#search-overlay":{"actions":{"toggle":"show"}}}'><i className="fa fa-search fa-flip-horizontal search-icon nav-link-icon"></i></a>
                
                {/* <!-- mobile collapse menu button - data-toggle="collapse" = default BS menu - data-toggle="off-canvas" = Off-cavnas Menu - data-toggle="overlay" = Overlay Menu --> */}
                <a href="#top" className="btn btn-icon btn-white order-12 d-lg-none" data-toggle="off-canvas" data-target=".navbar-main" data-settings='{"cloneTarget":true, "targetClassExtras": "navbar-offcanvas"}'> <i className="fa fa-bars"></i> </a>
                {/* <div className="bg-light p-3 text-sm d-none d-lg-block text-center" data-css='{"width":480,"height":60}'>Ad space</div> */}
              </div>
            </div>
          </div>
              <Navbar />
        </div>
      </>
      )
  }


}

export default Header