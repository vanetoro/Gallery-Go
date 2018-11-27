import React, { Component } from 'react';
import './App.css';
import Main from './containers/main'
import Header from './components/header'

class App extends Component {
  
  render() {

    return (
        <div className = 'App'>     
        <Header /> 
        {/* <Main /> */}
         <div className="page-loader" data-toggle="page-loader"></div>
        
        <a id="#top" href="#content" className="sr-only">Skip to content</a> 
        
        
        
        {/* <!-- ======== @Region: #highlighted ======== --> */}
        <div id="highlighted" className="bg-black">
          {/* <!-- Image Banner: Use the the data-bg-img functionality to create a simple image banner Use spacer classNamees to make the banner larger with padding, allows for easy responsive changes too see: elements-ctas.htm To make the banner full height add the attributes: data-toggle="full-height" data-offset="#header" --> */}
          <div className="overlay overlay-gradient overlay-op-8 text-left py-5 pt-lg-10"
    data-animate="fadeIn"
    data-bg-img="http://www.studio601.org/images/studio601_gallery2.jpg"
    data-url="https://wrapbootstrap.com/theme/appstrap-responsive-website-template-WB0C6D0H4?ref=tme">
            <div data-scroll="scrollax" className="container px-3" data-animate="fadeInUp" data-animate-delay="0.4">
              <p className="text-xs mt-0 mb-1 mt-lg-10 text-white text-uppercase font-weight-bold"><span className="text-primary">Featured</span> <span className="px-1">/</span> <i className="far fa-clock"></i> June 18th 2017</p>
              <h2 className="display-4 text-white font-weight-bold">
                The Ultimate Gallery Guide
              </h2>
              <h5 className="text-white font-weight-normal">
                What's hot, what's not this winter, and we don't mean the weather!
              </h5>
            </div>
          </div>
        </div>
        
                
          <Main />
          {/* <!-- Feature article MDR --> */}
          <div className="mb-4 mb-lg-6 py-7 text-center bg-dark overlay overlay-op-8" data-url="https://wrapbootstrap.com/theme/appstrap-responsive-website-template-WB0C6D0H4?ref=tme" data-bg-img="https://images.unsplash.com/photo-1499334844006-d49df7788949?dpr=2&auto=format&fit=crop&w=1100&h=350&q=80&cs=tinysrgb&crop=">
            <div className="container">
              <p className="text-xs mt-0 mb-1 text-white text-uppercase font-weight-bold"><span className="text-primary">Featured</span> <span className="px-1">/</span> <i className="far fa-clock"></i> June 18th 2017</p>
              <h2 className="text-uppercase text-letter-spacing-sm my-0 text-white font-weight-bold">
                Best productivity tips for 2017
              </h2>
              <a href="#" className="btn btn-primary btn-sm mt-3 text-uppercase font-weight-bold">Read More</a>
    
            </div>
          </div>
          {/* <!-- News section & sidebar --> */}
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                {/* <!-- News sections: Lifestyle --> */}
                <h4 className="text-uppercase text-letter-spacing-sm my-0 text-primary font-weight-bold">
                  Lifestyle
                </h4>
                <hr className="mt-2 mb-3" />
                <div className="row">
                  <div className="col-lg-7">
                    {/* <!-- Main item -->
                    <!-- News item 1 --> */}
                    <div className="card card-silent mb-lg-4 border-0 flex-ew" data-url="https://wrapbootstrap.com/theme/appstrap-responsive-website-template-WB0C6D0H4?ref=tme">
                      <img className="card-img img-fluid" data-src="https://source.unsplash.com/1UY8UuUkids/540x320/" alt="Comis Eligo Facilisis Iustum Laoreet Nulla Patria Vero" data-toggle="blazy"/>
                      <div className="card-body px-0">
                        <h4 className="card-title mb-1">
                          Comis Eligo Facilisis Iustum Laoreet Nulla Patria Vero
                        </h4>
                        <p className="card-text text-uppercase text-xs"><i className="far fa-comment"></i> 116 <span className="px-1">/</span> <i className="far fa-clock"></i> Jun 20 2018</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    {/* <!-- subitems -->
                    <!-- News subitem 1 --> */}
                    <div className="row row-hover py-1 py-lg-3 align-items-center" data-url="https://wrapbootstrap.com/theme/appstrap-responsive-website-template-WB0C6D0H4?ref=tme">
                      <div className="col-3">
                        <img className="img-fluid" data-toggle="blazy" data-src="https://source.unsplash.com/0606MKTpyM8/100x100/" alt="Modo Molior Nobis Tamen Turpis Valde Virtus"/>
                      </div>
                      <div className="col-9 pl-0">
                        <h6 className="mb-1">
                          Modo Molior Nobis Tamen Turpis Valde Virtus
                        </h6>
                        <p className="text-uppercase text-xs mb-0"><span className="text-primary">travel</span> <span className="px-1">/</span> <i className="far fa-clock"></i> Jun 2 2018</p>
                      </div>
                    </div>
                    <hr className="my-1" />
                    {/* <!-- News subitem 2 --> */}
                    <div className="row row-hover py-1 py-lg-3 align-items-center" data-url="https://wrapbootstrap.com/theme/appstrap-responsive-website-template-WB0C6D0H4?ref=tme">
                      <div className="col-3">
                        <img className="img-fluid" data-toggle="blazy" data-src="https://source.unsplash.com/Edod-s9I1lA/100x100/" alt="Dignissim Enim Esse Mauris Nostrud Pecus Suscipere Utinam"/>
                      </div>
                      <div className="col-9 pl-0">
                        <h6 className="mb-1">
                          Dignissim Enim Esse Mauris Nostrud Pecus Suscipere Utinam
                        </h6>
                        <p className="text-uppercase text-xs mb-0"><span className="text-primary">travel</span> <span className="px-1">/</span> <i className="far fa-clock"></i> Jun 2 2018</p>
                      </div>
                    </div>
                    <hr className="my-1" />
                    {/* <!-- News subitem 3 --> */}
                    <div className="row row-hover py-1 py-lg-3 align-items-center" data-url="https://wrapbootstrap.com/theme/appstrap-responsive-website-template-WB0C6D0H4?ref=tme">
                      <div className="col-3">
                        <img className="img-fluid" data-toggle="blazy" data-src="https://source.unsplash.com/5ido2uN-7V0/100x100/" alt="Exerci Iustum Magna Neque Nunc Os Venio"/>
                      </div>
                      <div className="col-9 pl-0">
                        <h6 className="mb-1">
                          Exerci Iustum Magna Neque Nunc Os Venio
                        </h6>
                        <p className="text-uppercase text-xs mb-0"><span className="text-primary">travel</span> <span className="px-1">/</span> <i className="far fa-clock"></i> Jun 2 2018</p>
                      </div>
                    </div>
                    <hr className="my-1" />
                  </div>
                </div>
                {/* <!-- end of News sections: Lifestyle -->
                <!-- Advert --> */}
                <div className="bg-light p-3 text-sm text-center mt-3 mb-5 mx-auto" data-css='{"width":"100%","height":80}'>Ad space</div>
                {/* <!-- News sections: Travel--> */}
                <h4 className="text-uppercase text-letter-spacing-sm my-0 text-primary font-weight-bold">
                  Travel
                </h4>
                <hr className="mt-2 mb-3" />
                <div className="row">
                  <div className="col-lg-7">
                    {/* <!-- Main item -->
                    <!-- News item 1 --> */}
                    <div className="card card-silent mb-lg-4 border-0 flex-ew" data-url="https://wrapbootstrap.com/theme/appstrap-responsive-website-template-WB0C6D0H4?ref=tme">
                      <img className="card-img img-fluid" data-toggle="blazy" data-src="https://source.unsplash.com/5ido2uN-7V0/540x320/" alt="Conventio Defui Esse Fere Illum Nostrud Quidem"/>
                      <div className="card-body px-0">
                        <h4 className="card-title mb-1">
                          Conventio Defui Esse Fere Illum Nostrud Quidem
                        </h4>
                        <p className="card-text text-uppercase text-xs"><i className="far fa-comment"></i> 108 <span className="px-1">/</span> <i className="far fa-clock"></i> Jun 2 2018</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    {/* <!-- subitems --> */}
                    {/* <!-- News subitem 1 --> */}
                    <div className="row row-hover py-1 py-lg-3 align-items-center" data-url="https://wrapbootstrap.com/theme/appstrap-responsive-website-template-WB0C6D0H4?ref=tme">
                      <div className="col-3">
                        <img className="img-fluid" data-toggle="blazy" data-src="https://source.unsplash.com/1UY8UuUkids/100x100/" alt="Cogo Commodo Dolore Ille Iustum Macto Mos Te Utrum"/>
                      </div>
                      <div className="col-9 pl-0">
                        <h6 className="mb-1">
                          Cogo Commodo Dolore Ille Iustum Macto Mos Te Utrum
                        </h6>
                        <p className="text-uppercase text-xs mb-0"><span className="text-primary">travel</span> <span className="px-1">/</span> <i className="far fa-clock"></i> Jun 2 2018</p>
                      </div>
                    </div>
                    <hr className="my-1" />
                    {/* <!-- News subitem 2 --> */}
                    <div className="row row-hover py-1 py-lg-3 align-items-center" data-url="https://wrapbootstrap.com/theme/appstrap-responsive-website-template-WB0C6D0H4?ref=tme">
                      <div className="col-3">
                        <img className="img-fluid" data-toggle="blazy" data-src="https://source.unsplash.com/0606MKTpyM8/100x100/" alt="Comis Cui Iaceo Laoreet Meus Pala Premo Quadrum Rusticus"/>
                      </div>
                      <div className="col-9 pl-0">
                        <h6 className="mb-1">
                          Comis Cui Iaceo Laoreet Meus Pala Premo Quadrum Rusticus
                        </h6>
                        <p className="text-uppercase text-xs mb-0"><span className="text-primary">travel</span> <span className="px-1">/</span> <i className="far fa-clock"></i> Jun 2 2018</p>
                      </div>
                    </div>
                    <hr className="my-1" />
                    {/* <!-- News subitem 3 --> */}
                    <div className="row row-hover py-1 py-lg-3 align-items-center" data-url="https://wrapbootstrap.com/theme/appstrap-responsive-website-template-WB0C6D0H4?ref=tme">
                      <div className="col-3">
                        <img className="img-fluid" data-toggle="blazy" data-src="https://source.unsplash.com/_Zua2hyvTBk/100x100/" alt="Ex Hos Jus Pecus Secundum Te Utinam Valetudo Volutpat"/>
                      </div>
                      <div className="col-9 pl-0">
                        <h6 className="mb-1">
                          Ex Hos Jus Pecus Secundum Te Utinam Valetudo Volutpat
                        </h6>
                        <p className="text-uppercase text-xs mb-0"><span className="text-primary">travel</span> <span className="px-1">/</span> <i className="far fa-clock"></i> Jun 2 2018</p>
                      </div>
                    </div>
                    <hr className="my-1" />
                  </div>
                </div>
                {/* <!-- end of News sections: Lifestyle --> */}
              </div>
              <div className="col-lg-3 mb-4 mb-lg-2">
                {/* <!-- Sidebar -->
                <!-- Advert --> */}
                <div className="bg-light p-3 text-sm text-center mt-4" data-css='{"width":"100%","height":240}'>Ad space</div>
                {/* <!-- Follow us--> */}
                <h5 className="text-uppercase mt-4 mb-0 font-weight-bold">
                  Follow Us
                </h5>
                <hr className="mt-2 mb-3" />
                {/* <!--@todo: replace with company social media details--> */}
                <div className="nav">
                  <a href="#" className="nav-link bg-brand-twitter text-white text-center py-4 flex-ew"> <i className="fab fa-twitter icon-1x"></i> <span className="sr-only">Twitter</span> <span className="d-block text-xs">2595</span> </a>
                  <a href="#" className="nav-link bg-brand-facebook text-white text-center py-4 flex-ew"> <i className="fab fa-facebook-f icon-1x"></i> <span className="sr-only">Facebook</span> <span className="d-block text-xs">3771</span> </a>
                  <a href="#" className="nav-link bg-brand-linkedin text-white text-center py-4 flex-ew"> <i className="fab fa-linkedin-in icon-1x"></i> <span className="sr-only">Linkedin</span> <span className="d-block text-xs">3752</span> </a>
                  <a href="#" className="nav-link bg-brand-google-plus text-white text-center py-4 flex-ew"> <i className="fab fa-google-plus-g icon-1x"></i> <span className="sr-only">Google plus</span> <span className="d-block text-xs">677</span> </a>
                </div>
                {/* <!-- Popular news widget --> */}
                <h5 className="text-uppercase mt-5 mb-0 font-weight-bold">
                  Popular
                </h5>
                <hr className="mt-2 mb-3" />
                {/* <!-- News subitem 1 --> */}
                <div className="row py-1 py-lg-2 align-items-start" data-url="https://wrapbootstrap.com/theme/appstrap-responsive-website-template-WB0C6D0H4?ref=tme">
                  <div className="col-3">
                    <img className="img-fluid" data-toggle="blazy" data-src="https://source.unsplash.com/0606MKTpyM8/100x100/" alt="Aptent Dolor Interdico Mauris Paulatim Quidem Ratis Sed Si"/>
                  </div>
                  <div className="col-9 pl-0">
                    <h6 className="mb-1">
                      Aptent Dolor Interdico Mauris Paulatim Quidem Ratis Sed Si
                    </h6>
                    <p className="text-uppercase text-xs mb-0"><i className="far fa-comment"></i> 100 <span className="px-1">/</span> <i className="far fa-clock"></i> Jun 2 2018</p>
                  </div>
                </div>
                <hr className="my-1" />
                {/* <!-- News subitem 2 --> */}
                <div className="row py-1 py-lg-2 align-items-start" data-url="https://wrapbootstrap.com/theme/appstrap-responsive-website-template-WB0C6D0H4?ref=tme">
                  <div className="col-3">
                    <img className="img-fluid" data-toggle="blazy" data-src="https://source.unsplash.com/NDZQLKiaCSI/100x100/" alt="Antehabeo Eum Importunus Melior Nibh Pala Pneum Vindico"/>
                  </div>
                  <div className="col-9 pl-0">
                    <h6 className="mb-1">
                      Antehabeo Eum Importunus Melior Nibh Pala Pneum Vindico
                    </h6>
                    <p className="text-uppercase text-xs mb-0"><i className="far fa-comment"></i> 101 <span className="px-1">/</span> <i className="far fa-clock"></i> Jun 2 2018</p>
                  </div>
                </div>
                <hr className="my-1" />
                {/* <!-- News subitem 3 --> */}
                <div className="row py-1 py-lg-2 align-items-start" data-url="https://wrapbootstrap.com/theme/appstrap-responsive-website-template-WB0C6D0H4?ref=tme">
                  <div className="col-3">
                    <img className="img-fluid" data-toggle="blazy" data-src="https://source.unsplash.com/5ido2uN-7V0/100x100/" alt="Abigo Aliquam Aptent Fere Meus Qui Tation Voco"/>
                  </div>
                  <div className="col-9 pl-0">
                    <h6 className="mb-1">
                      Abigo Aliquam Aptent Fere Meus Qui Tation Voco
                    </h6>
                    <p className="text-uppercase text-xs mb-0"><i className="far fa-comment"></i> 53 <span className="px-1">/</span> <i className="far fa-clock"></i> Jun 2 2018</p>
                  </div>
                </div>
                <hr className="my-1" />
              </div>
            </div>
          </div>
          {/* <!-- Gallery --> */}
          <div id="gallery" className="bg-light">
            <div className="container py-7">
              <h2 className="text-uppercase text-letter-spacing-sm my-0 text-primary font-weight-bold">
                News Gallery
              </h2>
              <hr className="mt-2 mb-3" />
              <div className="row no-gutters" data-toggle="magnific-popup" data-magnific-popup-settings='{"delegate": "a.gallery-trigger", "gallery":{"enabled":true}}'>
                <div className="col-6 col-lg-3">
                  <div className="card-effect card-effect-front-to-back">
                    <img data-src="https://source.unsplash.com/baRYCsjO6z4/300x200/" data-toggle="blazy" alt="Photo 91" className="img-fluid" />
                    <div className="card-back rounded bg-dark bg-op-8 flex-valign text-center p-3">
                      <h5 className="text-white">
                        News item 1
                      </h5>
                      <a href="https://source.unsplash.com/baRYCsjO6z4/1000x1200/" className="text-white gallery-trigger"> <i className="ion-ios-plus icon-1x"></i> </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="card-effect card-effect-front-to-back">
                    <img data-src="https://source.unsplash.com/QxkBP3A9XmU/300x200/" data-toggle="blazy" alt="Photo 92" className="img-fluid" />
                    <div className="card-back rounded bg-dark bg-op-8 flex-valign text-center p-3">
                      <h5 className="text-white">
                        News item 2
                      </h5>
                      <a href="https://source.unsplash.com/QxkBP3A9XmU/1000x1200/" className="text-white gallery-trigger"> <i className="ion-ios-plus icon-1x"></i> </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="card-effect card-effect-front-to-back">
                    <img data-src="https://source.unsplash.com/r1XwWjI4PyE/300x200/" data-toggle="blazy" alt="Photo 93" className="img-fluid" />
                    <div className="card-back rounded bg-dark bg-op-8 flex-valign text-center p-3">
                      <h5 className="text-white">
                        News item 3
                      </h5>
                      <a href="https://source.unsplash.com/r1XwWjI4PyE/1000x1200/" className="text-white gallery-trigger"> <i className="ion-ios-plus icon-1x"></i> </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="card-effect card-effect-front-to-back">
                    <img data-src="https://source.unsplash.com/4yzPVohNuVI/300x200/" data-toggle="blazy" alt="Photo 94" className="img-fluid" />
                    <div className="card-back rounded bg-dark bg-op-8 flex-valign text-center p-3">
                      <h5 className="text-white">
                        News item 4
                      </h5>
                      <a href="https://source.unsplash.com/4yzPVohNuVI/1000x1200/" className="text-white gallery-trigger"> <i className="ion-ios-plus icon-1x"></i> </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="card-effect card-effect-front-to-back">
                    <img data-src="https://source.unsplash.com/87TJNWkepvI/300x200/" data-toggle="blazy" alt="Photo 95" className="img-fluid" />
                    <div className="card-back rounded bg-dark bg-op-8 flex-valign text-center p-3">
                      <h5 className="text-white">
                        News item 5
                      </h5>
                      <a href="https://source.unsplash.com/87TJNWkepvI/1000x1200/" className="text-white gallery-trigger"> <i className="ion-ios-plus icon-1x"></i> </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="card-effect card-effect-front-to-back">
                    <img data-src="https://source.unsplash.com/CuFYW1c97w8/300x200/" data-toggle="blazy" alt="Photo 96" className="img-fluid" />
                    <div className="card-back rounded bg-dark bg-op-8 flex-valign text-center p-3">
                      <h5 className="text-white">
                        News item 6
                      </h5>
                      <a href="https://source.unsplash.com/CuFYW1c97w8/1000x1200/" className="text-white gallery-trigger"> <i className="ion-ios-plus icon-1x"></i> </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="card-effect card-effect-front-to-back">
                    <img data-src="https://source.unsplash.com/ThJIf6Q0b2s/300x200/" data-toggle="blazy" alt="Photo 98" className="img-fluid" />
                    <div className="card-back rounded bg-dark bg-op-8 flex-valign text-center p-3">
                      <h5 className="text-white">
                        News item 7
                      </h5>
                      <a href="https://source.unsplash.com/ThJIf6Q0b2s/1000x1200/" className="text-white gallery-trigger"> <i className="ion-ios-plus icon-1x"></i> </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="card-effect card-effect-front-to-back">
                    <img data-src="https://source.unsplash.com/xyDQNmT6vSs/300x200/" data-toggle="blazy" alt="Photo 99" className="img-fluid" />
                    <div className="card-back rounded bg-dark bg-op-8 flex-valign text-center p-3">
                      <h5 className="text-white">
                        News item 8
                      </h5>
                      <a href="https://source.unsplash.com/xyDQNmT6vSs/1000x1200/" className="text-white gallery-trigger"> <i className="ion-ios-plus icon-1x"></i> </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Fixed footer with Breaking news bar --> */}
          <div className="w-100 pos-lg-fixed pos-zindex-20 pos-b pos-r bg-dark text-white js-off-canvas-exclude" data-animate="fadeInUp">
            <div className="container">
              <div className="row align-items-center no-gutters">
                <div className="col-12 col-lg-8">
                  {/* <!--news ticker--> */}
                  <div className="row align-items-stretch align-items-lg-center">
                    <div className="col-3 col-lg-auto my-0 py-1 py-lg-3 bg-primary text-center">
                      <h5 className="text-uppercase text-sm font-weight-bold my-0">
                        Breaking
                      </h5>
                    </div>
                    <div className="col-9 owl-carousel owl-equalheight" data-toggle="owl-carousel" data-owl-carousel-settings='{"items":1, "center":true, "autoplay":true, "loop":true, "nav":false, "dots":false, "margin":5}'>
                      
                      {/* <!--News item 1--> */}
                      <p className="my-0 text-sm font-weight-normal">Antehabeo Commodo Macto Utinam Voco</p>
                      
                      {/* <!--News item 2--> */}
                      <p className="my-0 text-sm font-weight-normal">Abigo Commoveo In Nulla</p>
                      
                      {/* <!--News item 3--> */}
                      <p className="my-0 text-sm font-weight-normal">Ea Fere Meus Nimis Nobis Sino Verto</p>
                      
                      {/* <!--News item 4--> */}
                      <p className="my-0 text-sm font-weight-normal">Brevitas Commodo Exerci Haero Huic Metuo Secundum Venio</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 order-1 order-lg-2 py-1 py-lg-0">
                  {/* <!--Copyright social media icons--> */}
                  <div className="d-flex justify-content-center justify-content-lg-end align-items-center">
                    <p className="my-0 ml-3 text-xs order-2">Copyright 2017</p>
                    {/* <!--@todo: replace with company social media details--> */}
                    <a href="#" className="btn btn-icon btn-link btn-sm text-sm text-white"> <i className="fab fa-twitter"></i> <span className="sr-only">Twitter</span>
    </a>
                    <a href="#" className="btn btn-icon btn-link btn-sm text-sm text-white"> <i className="fab fa-facebook"></i> <span className="sr-only">Facebook</span>
    </a>
                    <a href="#" className="btn btn-icon btn-link btn-sm text-sm text-white"> <i className="fab fa-linkedin"></i> <span className="sr-only">Linkedin</span>
    </a>
                    <a href="#" className="btn btn-icon btn-link btn-sm text-sm text-white"> <i className="fab fa-google-plus"></i> <span className="sr-only">Google plus</span>
    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* /* <!-- #Content --> */}
        
        {/* <!-- ======== @Region: #footer ======== --> */ }
        <footer id="footer" className="pt-4 pb-6">
          <div className="container">
            <div className="row">
              
              <div className="col-lg-4">
                <h3 className="text-white font-weight-bold">
                  AppStrap<span className="text-primary">Mag</span>
                </h3>
                <p className="text-sm">Making the web a prettier place one template at a time! We make beautiful, quality, responsive Drupal & web templates!</p>
                <address>
                  <ul className="list-unstyled text-sm">
                    <li>
                      <abbr title="Phone"><i className="fa fa-phone fa-fw text-white"></i></abbr>
                      (+44) 7283643345
                    </li>
                    <li>
                      <abbr title="Email"><i className="fa fa-envelope fa-fw text-white"></i></abbr>
                      info@appstraptheme.com
                    </li>
                    <li>
                      <abbr title="Address"><i className="fa fa-home fa-fw text-white"></i></abbr>
                      Sunshine House, Sunville. SUN12 8LU.
                    </li>
                  </ul>
                </address>
                {/* <!--social media icons--> */}
                <div className="mt-3 mb-4 mb-lg-0">
                  {/* <!--@todo: replace with company social media details--> */}
                  <a href="#" className="btn btn-icon btn-dark btn-rounded btn-flat bg-hover-brand-twitter"> <i className="fab fa-twitter"></i> <span className="sr-only">Fa twitter</span> </a>
                  <a href="#" className="btn btn-icon btn-dark btn-rounded btn-flat bg-hover-brand-facebook"> <i className="fab fa-facebook-f"></i> <span className="sr-only">Fa facebook f</span> </a>
                  <a href="#" className="btn btn-icon btn-dark btn-rounded btn-flat bg-hover-brand-linkedin"> <i className="fab fa-linkedin-in"></i> <span className="sr-only">Fa linkedin in</span> </a>
                  <a href="#" className="btn btn-icon btn-dark btn-rounded btn-flat bg-hover-brand-google-plus"> <i className="fab fa-google-plus-g"></i> <span className="sr-only">Fa google plus g</span> </a>
                </div>
              </div>
              
              <div className="col-lg-7 offset-lg-1">
                <div className="row">
                  <div className="col-6 col-md-3">
                    <h4 className="mt-0">
                      Mens
                    </h4>
                    <ul className="list-unstyled footer-links">
                      <li><a href="#">Shoes</a></li>
                      <li><a href="#">Shirts</a></li>
                      <li><a href="#">Trousers</a></li>
                      <li><a href="#">Suits</a></li>
                      <li><a href="#">Jackets</a></li>
                      <li><a href="#">Sportswear</a></li>
                      <li><a href="#">Shorts</a></li>
                      <li><a href="#">Swimwear</a></li>
                      <li><a href="#">T-shirts</a></li>
                    </ul>
                  </div>
                  <div className="col-6 col-md-3">
                    <h4 className="mt-0">
                      Womens
                    </h4>
                    <ul className="list-unstyled footer-links">
                      <li><a href="#">Dresses</a></li>
                      <li><a href="#">Jeans</a></li>
                      <li><a href="#">Skirts</a></li>
                      <li><a href="#">Suits</a></li>
                      <li><a href="#">Jackets</a></li>
                      <li><a href="#">Sportswear</a></li>
                      <li><a href="#">Shorts</a></li>
                      <li><a href="#">Swimwear</a></li>
                      <li><a href="#">T-shirts</a></li>
                    </ul>
                  </div>
                  <div className="col-6 col-md-3">
                    <h4 className="mt-0">
                      Childrens
                    </h4>
                    <ul className="list-unstyled footer-links">
                      <li><a href="#">Shoes</a></li>
                      <li><a href="#">Sports Wear</a></li>
                      <li><a href="#">School Clothes</a></li>
                      <li><a href="#">Trousers</a></li>
                      <li><a href="#">Suits</a></li>
                      <li><a href="#">Jackets</a></li>
                      <li><a href="#">Sportswear</a></li>
                      <li><a href="#">Swimwear</a></li>
                      <li><a href="#">T-shirts</a></li>
                    </ul>
                  </div>
                  <div className="col-6 col-md-3">
                    <h4 className="mt-0">
                      Baby
                    </h4>
                    <ul className="list-unstyled footer-links">
                      <li><a href="#">Newborn</a></li>
                      <li><a href="#">Toddler</a></li>
                      <li><a href="#">Preschool</a></li>
                      <li><a href="#">Winter Suits</a></li>
                      <li><a href="#">Jackets</a></li>
                      <li><a href="#">Sportswear</a></li>
                      <li><a href="#">Swimwear</a></li>
                      <li><a href="#">T-shirts</a></li>
                      <li><a href="#">Trousers</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <hr className="my-4 hr-white op-1" />
            {/* <!--@todo: replace with company copyright details--> */}
            <div className="subfooter text-sm row">
              <div className="col-lg-6">
                <p className="m-0">Built with <a href="https://wrapbootstrap.com/theme/appstrap-responsive-website-template-WB0C6D0H4?ref=tme" className="footer-link">AppStrap Bootstrap 4 Theme</a> <span className="d-none d-lg-inline">|</span> <span className="d-block d-lg-inline">Copyright 2018 &copy; AppStrap</span></p>
              </div>
              <div className="col-lg-6 text-lg-right">
                <ul className="list-inline footer-links">
                  <li className="list-inline-item"><a href="#">Terms</a></li>
                  <li className="list-inline-item"><a href="#">Privacy</a></li>
                  <li className="list-inline-item"><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <a href="#top" className="btn btn-icon btn-dark pos-fixed pos-b pos-r mr-3 mb-3 scroll-state-hidden" title="Back to top" data-scroll="scroll-state"><i className="fa fa-chevron-up"></i></a>
        </footer>
  </div>
    );
  }
}

export default App;
