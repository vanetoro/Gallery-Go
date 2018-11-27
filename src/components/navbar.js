import React, { Component } from 'react'
 
class Navbar extends Component {
    render() {
        
    return (
      <div data-toggle="sticky">
        <div className="navbar navbar-expand-md">
          <div className="w-100 bg-primary navbar-dark">
            {/* <!-- Search form overlay --> */}
            
            {/* <!--Header search region - hidden by default using .fade className --> */}
            <div className="header-search d-flex fade dur-fast pos-absolute pos-a w-100 pos-zindex-fixed overlay" id="search-overlay">
              <form className="search-form d-flex align-items-center container py-0">
                <i className="fa fa-search fa-flip-horizontal icon-1x text-white"></i> 
                <input type="text" name="search" className="form-control search h-100 pl-2" value="" placeholder="Search"/>
                <a className="text-white" data-toggle="className" data-target='{"#search-overlay":{"actions":{"remove":"show"}}}'> <span className="sr-only">Close </span><i className="fa fa-times icon-1x"></i> </a>
              </form>
            </div>
            {/* <!-- Mobile mini header --> */}
            <div className="container d-flex d-lg-none align-items-center py-2">
              <a className="h4 text-white my-0 py-2">App<span className="font-weight-normal"> Strap</span></a>
              {/* <!-- Mobile menu items --> */}
              <div className="ml-auto d-flex align-items-center">
                {/* <!-- Mobile menu toggler --> */}
                <a href="#top" className="text-white op-8 px-1 order-2" data-toggle="off-canvas" data-target=".navbar-main" data-settings='{"cloneTarget":true, "targetClassExtras": "navbar-offcanvas"}'> <i className="fa fa-bars icon-1x"></i> </a>
                {/* <!-- Search icon --> */}
                <a href="#search" className="text-white op-8 px-1" data-toggle="className" data-target='{"#search-overlay":{"actions":{"add":"show"}}}'> <i className="fa fa-search fa-flip-horizontal search-icon icon-1x"></i> </a>
              </div>
            </div>
            {/* <!-- Desktop header --> */}
             <div className="container d-none d-lg-flex align-items-center px-0 py-2 py-lg-0">
              
              {/* <!-- Fade in brand on sticky --> */}
                <div className="sticky-effect-fade-in sticky-effect-expand-w d-flex align-items-center">
                    <a className="h4 text-white my-0 ml-3 mr-4 py-2">Gallery<span className="font-weight-normal">Go</span></a>
                </div>
              {/* <!--everything within this div is collapsed on mobile--> */}
              <div className="navbar-main collapse">
                {/* <!--main navigation--> */}
                   <ul className="nav navbar-nav container dropdown-effect-fade pos-static">
                  
                  <li className="nav-item"> <a className="nav-link">Home</a> </li>
                  
                  {/* <!-- Fashion: megamenu with columns of links & feature item --> */}
                  <li className="nav-item dropdown dropdown-mega-menu">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Fashion</a> 
                    {/* <!-- Dropdown Menu - mega menu--> */}
                    <div className="dropdown-menu">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3"> <a  className="dropdown-item">Jackets</a> <a  className="dropdown-item">Trousers</a> <a  className="dropdown-item">T-shirts</a> <a  className="dropdown-item">Shorts</a> <a  className="dropdown-item">Swimwear</a> </div>
                          <div className="col-lg-3"> <a  className="dropdown-item">Suits</a> <a  className="dropdown-item">T-shirts</a> <a  className="dropdown-item">Shirts</a> <a  className="dropdown-item">Trousers</a> <a  className="dropdown-item">Shoes</a> </div>
                          <div className="col-lg-3"> <a  className="dropdown-item">Jackets</a> <a  className="dropdown-item">T-shirts</a> <a  className="dropdown-item">Trousers</a> <a  className="dropdown-item">Shoes</a> <a className="dropdown-item">Sportswear</a> </div>
                          <div className="col-lg-3 d-none d-lg-flex">
                            <a className="p-3 op-9 overlay overlay-gradient overlay-op-6 d-flex flex-valign-b flex-ew" data-toggle="blazy" data-src="https://source.unsplash.com/hiZ7wtdX-nI/285x185">
                              <p className="my-0 text-white font-weight-bold text-primary text-sm">Featured</p>
                              <p className="my-0 text-white font-weight-normal">The Ultimate Fashion Guide</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  
                  {/* <!-- Tech: grid with image thumbnails --> */}
                  <li className="nav-item dropdown dropdown-mega-menu">
                    <a className="nav-link dropdown-toggle" id="elements-drop" data-toggle="dropdown" data-hover="dropdown">Tech</a> 
                    {/* <!-- Dropdown Menu - mega menu--> */}
                    <div className="dropdown-menu">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3 d-flex">
                            <a className="p-3 pt-6 op-9 overlay overlay-gradient overlay-op-9 d-flex flex-valign-b flex-ew" data-toggle="blazy" data-src="https://source.unsplash.com/jUwvjOmCTWc/540x320/">
                              <p className="my-0 text-white font-weight-bold text-primary text-sm"><i className="fa fa-clock-o"></i> May 30 2018</p>
                              <p className="my-0 text-white font-weight-normal">Abdo Aliquam Humo Immitto Interdico Lenis Molior</p>
                            </a>
                          </div>
                          <div className="col-lg-3 d-flex">
                            <a className="p-3 pt-6 op-9 overlay overlay-gradient overlay-op-9 d-flex flex-valign-b flex-ew" data-toggle="blazy" data-src="https://source.unsplash.com/A5-Xr7WyktQ/540x320/">
                              <p className="my-0 text-white font-weight-bold text-primary text-sm"><i className="fa fa-clock-o"></i> Jul 31 2018</p>
                              <p className="my-0 text-white font-weight-normal">Abdo Commoveo Facilisis Immitto Mauris Quadrum Saluto</p>
                            </a>
                          </div>
                          <div className="col-lg-3 d-flex">
                            <a className="p-3 pt-6 op-9 overlay overlay-gradient overlay-op-9 d-flex flex-valign-b flex-ew" data-toggle="blazy" data-src="https://source.unsplash.com/jdD8gXaTZsc/540x320/">
                              <p className="my-0 text-white font-weight-bold text-primary text-sm"><i className="fa fa-clock-o"></i> Jul 25 2018</p>
                              <p className="my-0 text-white font-weight-normal">Abdo Abigo Melior Neque Praemitto Probo Turpis Ullamcorper Vereor</p>
                            </a>
                          </div>
                          <div className="col-lg-3 d-flex">
                            <a className="p-3 pt-6 op-9 overlay overlay-gradient overlay-op-9 d-flex flex-valign-b flex-ew" data-toggle="blazy" data-src="https://source.unsplash.com/e2dDvdH3lIY/540x320/">
                              <p className="my-0 text-white font-weight-bold text-primary text-sm"><i className="fa fa-clock-o"></i> Jun 29 2018</p>
                              <p className="my-0 text-white font-weight-normal">Capto Hendrerit Jumentum Pneum Similis Tation Volutpat</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  
                  {/* <!-- Mega menu example --> */}
                  <li className="nav-item dropdown dropdown-mega-menu ">
                    <a className="nav-link dropdown-toggle" id="news-drop" data-toggle="dropdown" data-hover="dropdown">News</a> 
                    {/* <!-- Dropdown Menu - Mega Menu --> */}
                    <div className="dropdown-menu">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3 py-2" data-url="#">
                            <img data-toggle="blazy" data-src="https://source.unsplash.com/zAi2Is48-MA/540x320/" className="img-fluid" />
                            <h5 className="mt-2 mb-0">
                              Defui Exerci Natu Oppeto Ulciscor
                            </h5>
                            <p className="mb-0">Abico lobortis nostrud. Aliquip appellatio comis loquor melior nulla vel vulputate.</p>
                          </div>
                          <div className="col-lg-3 py-2" data-url="#">
                            <img data-toggle="blazy" data-src="https://source.unsplash.com/8tXukRrs7yk/540x320/" className="img-fluid" />
                            <h5 className="mt-2 mb-0">
                              Blandit Diam Imputo Ludus Modo Proprius Valde
                            </h5>
                            <p className="mb-0">Conventio esca similis vulpes zelus.</p>
                          </div>
                          <div className="col-lg-3 py-2" data-url="#">
                            <img data-toggle="blazy" data-src="https://source.unsplash.com/nrSzRUWqmoI/540x320/" className="img-fluid" />
                            <h5 className="mt-2 mb-0">
                              Ad Comis Eros Imputo Probo Uxor
                            </h5>
                            <p className="mb-0">Camur commoveo dolore elit hos illum occuro odio pertineo probo.</p>
                          </div>
                          <div className="col-lg-3 py-2" data-url="#">
                            <img data-toggle="blazy" data-src="https://source.unsplash.com/6Xjl5-Xq4g4/540x320/" className="img-fluid" />
                            <h5 className="mt-2 mb-0">
                              Appellatio Eligo Nobis Pneum Praemitto
                            </h5>
                            <p className="mb-0">Causa esse gemino ibidem minim praesent sit tego turpis volutpat.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  
                  <li className="nav-item dropdown dropdown-mega-menu"> <a  className="nav-link">Blog</a> </li>
                </ul>
              </div>
              {/* <!--/.navbar-collapse -->
              <!-- Search icon --> */}
              <a href="#search" className="text-white ml-auto mr-3" data-toggle="className" data-target='{"#search-overlay":{"actions":{"add":"show"}}}'> <i className="fa fa-search fa-flip-horizontal search-icon icon-1x"></i> </a>
            </div>
          </div>
        </div>
        </div>
    )

    }
}
 
export default Navbar;