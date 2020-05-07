import React, { Component } from "react";
import "../assets/Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faBars } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faFacebookF,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import { Zoom } from "react-slideshow-image";
import { Link } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";

library.add(faFacebookF, faTwitter, faGooglePlusG);
const color = "#b8860b";
const size = "lg";
const width = "250px";
const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      scrolled: false,
      hide: true,
      bodyArea: false,
      bsnsStrgArea: true,
      nav: true,
      img: [],
      im2: [
        {
          url:
            "data:image/jpeg;base64,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",
        },
        {
          url:
            "https://www.handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
        },
      ],
      width: 700,
    };
  }

  Slideshow = () => {
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {this.state.img.map((each, index) => (
            <img key={index} style={{ width: "50%" }} src={each} alt="img" />
          ))}
        </Zoom>
      </div>
    );
  };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        this.setState({ hidden: false });
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
        this.setState({ hidden: true });
      }
    });
    window.addEventListener("resize", (b) => {
      if (b.target.innerWidth < 376) {
        this.setState({ width: 250 });
      } else if (b.target.innerWidth > 376) {
        this.setState({ width: 700 });
      }
    });
  }
  prsnl = () => {
    const hdn = this.state.hide;
    return (
      <div hidden={hdn} className="personal-area">
        <div className="grid-container-personal">
          <div className="grid-item-personal ">
            <label className="bld">Find You Nearest Your Space</label>
            <br />
            <select className="slct-nrst dwd">
              <option>Select</option>
            </select>
            <button className="btn fnd-prsnl">Find ></button>
          </div>
          <div className="grid-item-personal">
            <label className="bld">Storing personal items</label>
            <ul className="b">
              <li>I'm moving home</li>
              <li>I'm renovating my home</li>
              <li>I need extra space my home</li>
              <li>I need temporary storage</li>
            </ul>
          </div>
          <div className="grid-item-personal tree">
            <button className="btn-in-personal btn">Storage Calculaor ></button>
            <br />
            <button className="btn-in-personal btn">Get Your Quote ></button>
            <br />
            <button className="btn-in-personal btn">
              Reserve Your Space >
            </button>
          </div>
        </div>
        {/* <img
          src="https://public.dreesteam.com/assets/EYrud-a6KJ-Ayt63GXIVxF?scale=xxl"
          width="100%"
          alt="img"
        ></img> */}
        {/* <div className="img-prsnl"> */}
        <SimpleImageSlider
          width={this.state.width}
          images={this.state.im2}
          height={this.state.width}
          style={{ margin: "auto" }}
        />
        {/* </div> */}
      </div>
    );
  };
  bsns = () => {
    const hdn = this.state.bsnsStrgArea;
    return (
      <div hidden={hdn}>
        <div className="grid-container7">
          <div className="grid-item7">
            <div className="grid-container8">
              <div className="grid-item8">
                <label className="lbl-strg">Business Storage</label>
                <br />
                <label className="desc-srtg">
                  Create more space in your place of bussiness, simply request a
                  quote now
                </label>
              </div>
              <div className="grid-item8 ">
                <button className="btn btnInBsns btnInBsns750">
                  Storage Calculation >
                </button>
                <button className="btn btnInBsns btnInBsns750">
                  Reserve Your Space >
                </button>
              </div>
            </div>
            <div className="grid-container9">
              <div className="grid-item9">
                <div className="grid-container10">
                  <div className="grid-item10">
                    <label>Bussiness Friendly Self-Storage</label>
                  </div>
                  <div className="grid-item10">
                    <label>Storage with lexible Rent Period</label>
                  </div>
                  <div className="grid-item10">
                    <label>Storage for Archiving</label>
                  </div>
                  <div className="grid-item10">
                    Storae for E-commerce Business
                  </div>
                  <div className="grid-item10">
                    Storage of Stock/Sales Materials
                  </div>
                  <div className="grid-item10">
                    Use Self-Storage as Your Integrated Distribution Hub
                  </div>
                  <div className="grid-item10">Online Bill Payment</div>
                  <div className="grid-item10">Security</div>
                  <div className="grid-item10">Access Hours</div>
                  <div className="grid-item10">Office Opening Hourse</div>
                </div>
              </div>
              <div className="grid-item9">
                <div className="grid-container11">
                  <div className="grid-item11">
                    <div className="grid-container12">
                      <div className="grid-item12">
                        <label className="bld lbl-wtf1">
                          Business friendly self-storage
                        </label>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid-item11">
                    <div className="grid-container13">
                      <div className="grid-item13">
                        <img
                          src="https://cdn0-production-images-kly.akamaized.net/tAr72vTJCpF4IF9O5L493CD79kE=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2754932/original/005940800_1552970791-fotoHL_kucing.jpg"
                          width="250"
                          alt="img"
                        ></img>
                      </div>
                      <div className="grid-item12 dscnt">
                        <div className="dscnt-area">
                          <label className="bld lbl-wtf">
                            Locate the nearest Your Space
                          </label>
                        </div>
                        <div className="dscnt-area desc-dscnt df">
                          <select className="slctd">
                            <option>select</option>
                          </select>
                          <button className="btn fnd">Find ></button>
                        </div>
                      </div>
                      <div className="grid-item12 dscnt">
                        <div className="dscnt-area">
                          <label className="bld lbl-wtf">
                            50% Discounty Offer
                          </label>
                        </div>
                        <div className="dscnt-area desc-dscnt">
                          <label className="bld">
                            For up to 4 weeks with a 6 month contract
                          </label>
                        </div>
                      </div>
                      <div className="grid-item12 dscnt">
                        <div className="dscnt-area">
                          <label className="bld lbl-wtf">
                            50% Discounty Offer
                          </label>
                        </div>
                        <div className="dscnt-area desc-dscnt">
                          <label className="bld">
                            For up to 4 weeks with a 6 month contract
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  hideHandle() {
    this.setState({
      bsnsStrgArea: !this.state.bsnsStrgArea,
      bodyArea: !this.state.bodyArea,
    });
  }
  navbarPhone = () => {
    return (
      <div className="nvbr-phone">
        <div className="grid-container20">
          <div className="grid-item20">
            <button
              className="btn btn-bar"
              onClick={() => this.setState({ nav: !this.state.nav })}
            >
              <FontAwesomeIcon size={size} icon={faBars} />
            </button>
          </div>
          <div className="mr-auto" hidden={this.state.nav}>
            <Link to="#" className="lbl-nav">
              <p className="mnu-pon">Home</p>
            </Link>
            <Link to="#" className="lbl-nav">
              <p
                className="mnu-pon"
                onClick={() =>
                  this.setState({
                    bodyArea: !this.state.bodyArea,
                    hide: !this.state.hide,
                    bsnsStrgArea: !this.state.bsnsStrgArea,
                  })
                }
              >
                Personal Storage
              </p>
            </Link>
            <Link to="#" className="lbl-nav">
              <p className="mnu-pon" onClick={() => this.hideHandle()}>
                Business Storage
              </p>
            </Link>
            <Link to="#" className="lbl-nav">
              <p className="mnu-pon">Why Us?</p>
            </Link>
            <Link to="#" className="lbl-nav">
              <p className="mnu-pon">Self-Storage</p>
            </Link>
            <Link to="#" className="lbl-nav">
              <p className="mnu-pon">Own A Self-Storage Facility</p>
            </Link>
            <Link to="#" className="lbl-nav">
              <p className="mnu-pon">Contact Us</p>
            </Link>
            <Link to="#" className="lbl-nav">
              <p className="mnu-pon">Reserve Online</p>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div onScroll={this.handleScroll}>
        <div
          className={
            this.state.scrolled
              ? "grid-container1 fixed phoneSize"
              : "grid-container1 phoneSize"
          }
        >
          <div hidden={this.state.hidden} className="grid-item1">
            <img
              src="https://miro.medium.com/max/3200/1*5prpHqZ2iIss-jb8GkNaVA.jpeg"
              width="30"
              alt="img"
            />
          </div>
          <div
            className={this.state.scrolled ? "grid-item1 mnu" : "grid-item1"}
          >
            <Link to="#" className={this.state.scrolled ? "mkm" : "mnm"}>
              Home
            </Link>
          </div>
          <div
            className={this.state.scrolled ? "grid-item1 mnu" : "grid-item1"}
          >
            <Link
              to="#"
              className={this.state.scrolled ? "mkm" : "mnm"}
              onClick={() =>
                this.setState({
                  bodyArea: !this.state.bodyArea,
                  hide: !this.state.hide,
                  bsnsStrgArea: !this.state.bsnsStrgArea,
                })
              }
            >
              Personal Storage
            </Link>
          </div>
          <div
            className={this.state.scrolled ? "grid-item1 mnu" : "grid-item1"}
          >
            <Link to="#" className={this.state.scrolled ? "mkm" : "mnm"} onClick={() => this.hideHandle()}>
              Bussiness Storage
            </Link>
          </div>
          <div
            className={this.state.scrolled ? "grid-item1 mnu" : "grid-item1"}
          >
            <Link to="#" className={this.state.scrolled ? "mkm" : "mnm"}>
              Why Us?
            </Link>
          </div>
          <div
            className={
              this.state.scrolled ? "grid-item1 mnu sds sds2" : "grid-item1 sds"
            }
          ></div>
          <div
            className={
              this.state.scrolled ? "grid-item1 mnu" : "grid-item1 fkm"
            }
          >
            <Link to="#" className={this.state.scrolled ? "mkm" : "mnm"}>
              Self-Storage Blog
            </Link>
          </div>
          <div
            className={
              this.state.scrolled ? "grid-item1 mnu fxd" : "grid-item1 bla"
            }
          ></div>
          <div
            className={this.state.scrolled ? "grid-item1 mnu " : "grid-item1 "}
          >
            <Link to="#" className={this.state.scrolled ? "mkm" : "mnm"}>
              Own A Self-Storage Facility
            </Link>
          </div>
          <div
            className={this.state.scrolled ? "grid-item1 mnu" : "grid-item1"}
          >
            <Link to="#" className={this.state.scrolled ? "mkm" : "mnm"}>
              Contact Us
            </Link>
          </div>
          <div
            className={
              this.state.scrolled
                ? "grid-item1 last-grid mnu"
                : "grid-item1 last-grid"
            }
          >
            <Link to="#" className={this.state.scrolled ? "mkm" : "mnm"}>
              Reserve Online
            </Link>
          </div>
        </div>
        <this.navbarPhone />
        <div className="grid-container2">
          <div className="grid-item2 logo logo2">
            <img
              src="https://miro.medium.com/max/3200/1*5prpHqZ2iIss-jb8GkNaVA.jpeg"
              width="150px"
              alt="img"
            ></img>
          </div>
          <div className="grid-item2">
            <div className="cntn">
              <select className="slct1" id="country" name="country">
                <option value="australia">United State</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
              <select className="slct1" id="country" name="country">
                <option value="australia">EN</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
              <FontAwesomeIcon
                className="icon"
                icon={faFacebookF}
                color={color}
                size={size}
              />
              <FontAwesomeIcon
                className="icon"
                icon={faTwitter}
                color={color}
                size={size}
              />
              <FontAwesomeIcon
                className="icon"
                icon={faGooglePlusG}
                color={color}
                size={size}
              />
            </div>
            <div className="nmbr-phone-area">
              <label className="lbl-pone">Make Our Space Your Space</label>
              <FontAwesomeIcon
                icon={faPhoneAlt}
                size="sm"
                style={{
                  margin: "0px 5px 0px 5px",
                  border: "1px solid black",
                  padding: 5,
                  borderRadius: 50,
                }}
              />
              <label className="lbl-pone">+852 8202 0811</label>
            </div>
          </div>
        </div>
        <div>
          <div hidden={this.state.bodyArea}>
            <div className="bdy-area">
              <div className="grid-container3">
                <div className="grid-item3 grid-left">
                  <label
                    className="lbl-strg"
                    onClick={() => this.setState({ hide: !this.state.hide })}
                  >
                    Personal Storage
                  </label>
                  <br />
                  <label className="desc-srtg">
                    Find out more about storing personal items and how toreserve
                    a storage room online
                  </label>
                </div>
                <div className="grid-item3 grid-right">
                  <label className="lbl-strg" onClick={() => this.hideHandle()}>
                    Bussiness Storage
                  </label>
                  <br />
                  <label className="desc-srtg">
                    Create more space in your place of bussiness, simply request
                    a quote now
                  </label>
                </div>
              </div>
              <div className="grid-container4">
                <div className="grid-item4" hidden={!this.state.hide}>
                  <p className="lbl-in-img">DELICIOUS</p>
                  <i className="dsc-lbl-in-img">
                    cake is our signature product
                  </i>
                </div>
                <div style={{ textAlign: "right" }} hidden={!this.state.hide}>
                  <button className="btn">Storage Calculation ></button>
                  <br />
                  <button className="btn">Reserve Your Space ></button>
                </div>
                <this.prsnl />

                <div className="grid-container5">
                  <div className="grid-item5">
                    <div className="data dsc-dsc">
                      <div className="data">
                        <img
                          src="https://d1qfj231ug7wdu.cloudfront.net/pictures/estate/2650/2649902/16085869915d30c22c699f77.64514122_1920.jpg"
                          width={width}
                          alt="img"
                        ></img>
                      </div>

                      <br />
                      <label className="bld dsc-dsc">Your Promotion</label>
                      <br />
                      <label className="dsc-dsc">
                        Find out how much you can save on your lease
                      </label>
                    </div>
                  </div>
                  <div className="grid-item5">
                    <div className="data dsc-dsc">
                      <div className="data">
                        <img
                          src="https://d1qfj231ug7wdu.cloudfront.net/pictures/estate/2650/2649902/16085869915d30c22c699f77.64514122_1920.jpg"
                          width={width}
                          alt="img"
                        ></img>
                      </div>
                      <br />
                      <label className="bld dsc-dsc">Your Packaging</label>
                      <br />
                      <label className="dsc-dsc">
                        Buy your boxes and packaging materials here
                      </label>
                    </div>
                  </div>
                  <div className="grid-item5">
                    <div className="data dsc-dsc">
                      <div className="data">
                        <img
                          src="https://d1qfj231ug7wdu.cloudfront.net/pictures/estate/2650/2649902/16085869915d30c22c699f77.64514122_1920.jpg"
                          alt="img"
                          width={width}
                        ></img>
                      </div>
                      <br />
                      <label className="bld dsc-dsc">Your Bill Payment</label>
                      <br />
                      <label className="dsc-dsc">
                        Pay the bill for your current storage rental online
                      </label>
                    </div>
                  </div>
                  <div className="grid-item5">
                    <div className="data dsc-dsc">
                      <div className="data">
                        <img
                          src="https://d1qfj231ug7wdu.cloudfront.net/pictures/estate/2650/2649902/16085869915d30c22c699f77.64514122_1920.jpg"
                          alt="img"
                          width={width}
                        ></img>
                      </div>
                      <br />
                      <label className="bld dsc-dsc">Your Nearest Store</label>
                      <br />
                      <label className="dsc-dsc">
                        Find where our stores are located in your country
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <this.bsns />
          <div className="grid-container6">
            <div className="grid-item6">
              <label className="abt-other">Your Space</label>
              <p>What is self-storage</p>
              <p>Your promotion</p>
              <p>Your packaging</p>
              <p>Your bill payment</p>
              <p>FAQ</p>
            </div>
            <div className="grid-item6">
              <label className="abt-other">Personal Storage</label>
              <br />
              <p>I'm moving home</p>
              <p>I'm renovating my home</p>
              <p>I need extra space at home</p>
              <p>I need temporary storage</p>
            </div>
            <div className="grid-item6 dsktp"></div>
            <div className="grid-item6">
              <label className="abt-other">Bussiness Storage</label>
              <p>Storage for archiving</p>
              <p>Storae for e-commerce</p>
              <p>Bussiness</p>
              <p>Storage of stock/sales materials</p>
              <p>Use self-storage as your</p>
              <p>Integrated distribution hub</p>
            </div>
            <div className="grid-item6">
              <label className="abt-other">Why Us?</label>
              <p>Storage With flexible rent period</p>
              <p>Bussiness friendly self-storage</p>
              <p>Security</p>
              <p>Access hours</p>
              <p>Office opening hours</p>
            </div>
            <div className="grid-item6">
              <label className="bld">Self-Storage Blog</label>
              <p className="bld">Own A Self-Storage Facility</p>
              <p className="bld">About Us</p>
              <p className="bld">Contact Us</p>
              <p className="bld">Reserve Online</p>
            </div>
          </div>
        </div>
        <div>
          <ul className="lst-footer">
            <li className="dsk">Terms and Condition</li>
            <li className="dsk">Privacy Policy</li>
            <li className="dsk last-list">Sitemap</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
