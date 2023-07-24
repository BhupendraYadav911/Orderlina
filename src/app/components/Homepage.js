"use client";
import styles from "../styles/homepage.module.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import Image from 'next/image'
import payScan from "../../../public/Images/payScan.jpg"
import QrAwards from "../../../public/Images/QrAwards.png"
import QRCODEMENU from "../../../public/Images/QRCODEMENU.webp"
import MarcelasQRFLYER from "../../../public/Images/MarcelasQRFLYER.jpg"
import ManageOrderKitchen from "../../../public/Images/ManageOrderKitchen.png"
import QrOptions from "../../../public/Images/QrOptions.jpg"
import QrSimpler from "../../../public/Images/QrSimpler.png"
import QrBrands from "../../../public/Images/QrBrands.png"
import QrFeature from "../../../public/Images/QrFeature.png"


const Homepage = () => {
  return (
    <> 
      <section className="section ">
        <div className={`container ${styles.contData}`}>
          <div className="row">
            <div className="col-md-6">
              <div className={styles.imageContainer}>
                <Image                  
                  src={payScan}
                  alt="Image 1"
                  className={styles.image}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className={styles.buttonContainer}>
                <div className={styles.buttonHead}>
                  <p>
                    Scan, Order <br />& Pay ✓
                  </p>
                  <h5>
                    QR Code Menu for Scan, Order and Pay <br />
                    Increase orders, decrease overheads, and grow <br />
                    your brand. Sign Up For Free Today!
                  </h5>
                </div>
                <div className={styles.buttonGroup}>
                  <Link href="/page1">
                    <button className={`btn btn-danger btns ${styles.btns} `}>
                      Sign up
                    </button>
                  </Link>
                  <Link href="/page2">
                    <button
                      className={`btn btn-secondary btns ${styles.ViewBtn} `}
                    >
                      View Demo
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div
          className={`container ${styles.contData} d-flex justify-content-center align-items-center flex-column ${styles.container}`}
        >
          <div className="row">
            <div className="inner-column-1">
              <div className="kt-inside-inner-col">
                <figure className="wp-block-image size-full is-resized">
                  <Image
                    src={QrAwards}
                    alt="QR Code Menu Awards"                   
                    layout="responsive"
                    className={` ${styles.achieve}`}
                  />
                </figure>

                <div className={`is-layout-flex ${styles.buttonContainer}`}>
                  <div className={`aligncenter ${styles.buttonWrapper}`}>
                    <button
                      className={`btn btn-danger btns ${styles.ViewBtn} `}
                      href="https://orderlina.menu/marcelas"
                    >
                      View Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`section ${styles.sectionback}`}>
        <div
          className={`${styles.spacer} aligncenter kt-block-spacer-_b6ea76-59`}
        ></div>
        <section className={`section `}>
          <div className={`container ${styles.contData}`}>
            <div className="row">
              <div className="col-md-6">
                <div className={`    ${styles.insideinner}`}>
                  <h3 className={`    ${styles.HeadEasy}`}>Easy</h3>
                  <p></p>
                  <p>★ Customer scans, orders, and pays</p>
                  <p>★ The Kitchen receives the order</p>
                  <p>★ Server delivers</p>
                  <div className="d-flex justify-content-center">
                    <button
                      className={`btn btn-danger btns ${styles.btns}`}
                      href="https://orderlina.menu/marcelas"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      View Demo
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className=" borderRadius24">
                  <Image
                    src={QRCODEMENU}
                    alt="QR CODE MENU"
                    className={styles.image}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.miniSpacer}`}></div>
        </section>
        <section className="section">
          <div className={`container ${styles.contData}`}>
            <div className={`row `}>
              <div className="col-md-6">
                <div className={`    ${styles.insideinnerdata}`}>
                  <h3 className={`    ${styles.HeadEasy}`}>Flyers</h3>
                  <p></p>
                  <p>
                    Pick one that matches your brand from our range of included
                    templates
                  </p>
                  <div className="d-flex justify-content-center">
                    <button
                      className={`btn btn-danger btns ${styles.btns} `}
                      href="https://orderlina.menu/marcelas"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Scan QR Code Or Click
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className={` ${styles.borderRadius24}   `}>
                  <Image
                    src={MarcelasQRFLYER}
                    alt=""
                    className={styles.FlyerImages}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.miniSpacer}`}></div>
        </section>
        <section className="section">
          <div className={`container ${styles.contData}`}>
            <div className={`row `}>
              <div className="col-md-6">
                <div className={`    ${styles.insideinnerdata}`}>
                  <h3 className={`    ${styles.HeadEasy}`}>Kitchen</h3>
                  <p></p>
                  <p>
                    Manage orders, service requests, chats and much more with
                    Orderlina Manager
                  </p>
                  <div className="d-flex justify-content-center">
                    <button
                      className={`btn btn-danger btns ${styles.btns} `}
                      href="https://orderlina.menu/marcelas"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className={` ${styles.borderRadius24}   `}>
                  <Image
                    src={ManageOrderKitchen}
                    alt=""
                    className={styles.KitchenImages}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.miniSpacer}`}></div>
        </section>
        <section className="section">
          <div className={`container ${styles.contData}`}>
            <div className={`row `}>
              <div className="col-md-6">
                <div className={`    ${styles.insideinnerdata}`}>
                  <h3 className={`    ${styles.HeadEasy}`}>Payments</h3>
                  <p></p>
                  <p>
                    We accept all major payment methods and are adding more
                    every day. Save time, increase tips and table turns by
                    taking payments directly through Orderlina.
                  </p>
                  <div className="d-flex justify-content-center">
                    <button
                      className={`btn btn-danger btns ${styles.btns} `}
                      href="https://orderlina.menu/marcelas"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className={`${styles["wp-block-kadence-column"]} ${styles["kadence-column_3cb881-96"]} ${styles["inner-column-1"]}`}
                >
                  <div className={`${styles["kt-inside-inner-col"]}`}>
                    <div
                      className={`${styles["wp-block-kadence-column"]} ${styles["kadence-column_8f60a4-0c"]} ${styles["inner-column-1"]}`}
                    >
                      <div className={`${styles["kt-inside-inner-col"]}`}>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://www.tech-hangout.com/wp-content/uploads/2018/01/GooglePay_Lockup.max-1000x1000.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://www.logo.wine/a/logo/Apple_Pay/Apple_Pay-Logo.wine.svg"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://sahfr.files.wordpress.com/2023/02/cash-app-logo.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/03/image-jpeg.webp"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/03/image-2.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/03/image-3.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/03/image-4-1024x332.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/03/image-5-1024x614.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2021/04/Stripe-wordmark-blurple_lg-1024x488.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/03/image-2-1024x792.webp"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://storage.googleapis.com/adforum-media/34506363/ad_34506363_b0b0831318b62c47_web.jpg"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/03/image-6-1024x640.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://assets.grab.com/wp-content/uploads/sites/8/2021/11/26235239/GrabPay_Final_Logo_RGB_green_StackedVersion-01.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://upload.wikimedia.org/wikipedia/en/4/40/OXXO_logo.svg"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/03/image-7.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://exit-co.store/wp-content/uploads/2021/04/abs-logo28f7a99f299c69658b7dff00006ed795.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/03/image-8.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/03/image-9-1024x407.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/03/image-10.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://cdn.dachbleche24-shop.de/wp-content/uploads/2021/10/klarna-logo.jpg"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/03/image-11-1024x442.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/03/image-12-867x1024.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://upload.wikimedia.org/wikipedia/en/4/40/OXXO_logo.svg"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://storage.googleapis.com/adforum-media/34506363/ad_34506363_b0b0831318b62c47_web.jpg"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.miniSpacer}`}></div>
        </section>
        <section className="section">
          <div className={`container ${styles.contData}`}>
            <div className={`row `}>
              <div className="col-md-6">
                <div className={`    ${styles.insideinnerdata}`}>
                  <h3 className={`    ${styles.HeadEasy}`}>Options</h3>
                  <p></p>
                  <p>
                    Receive orders from anywhere, any time with TAKEAWAY
                    ordering. Have your own drivers? Why not add commission free
                    DELIVERY orders.
                  </p>
                  <div className="d-flex justify-content-center">
                    <button
                      className={`btn btn-danger btns ${styles.btns} `}
                      href="https://orderlina.menu/marcelas"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className={` ${styles.borderRadius24}   `}>
                  <Image
                    src={QrOptions}
                    alt=""
                    className={styles.FlyerImages}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.miniSpacer}`}></div>
        </section>
        <section className="section">
          <div className={`container ${styles.contData}`}>
            <div className={`row `}>
              <div className="col-md-6">
                <div className={`    ${styles.insideinnerdata}`}>
                  <h3 className={`    ${styles.HeadEasy}`}>Simpler</h3>
                  <p></p>
                  <p>
                    Want to just use an existing menu without ordering? No
                    problem. Upload any PDF or Image. Click to see an example
                    below.
                  </p>
                  <div className="d-flex justify-content-center">
                    <button
                      className={`btn btn-danger btns ${styles.btns} `}
                      href="https://orderlina.menu/marcelas"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className={` ${styles.borderRadius24}   `}>
                  <Image
                    src={QrSimpler}
                    alt=""
                    className={styles.FlyerImages}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.miniSpacer}`}></div>
        </section>
        <section className="section">
          <div className={`container ${styles.contData}`}>
            <div className={`row `}>
              <div className="col-md-6">
                <div className={`    ${styles.insideinnerdata}`}>
                  <h3 className={`    ${styles.HeadEasy}`}>Brand</h3>
                  <p>* * * * *</p>
                  <p></p>
                  <p>
                    Start building your brand today. Get customers to share your
                    menu and individual menu items on their socials. Connect
                    your Facebook pixel to start building your customer base.
                  </p>
                  <div className="d-flex justify-content-center">
                    <button
                      className={`btn btn-danger btns ${styles.btns} `}
                      href="https://orderlina.menu/marcelas"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className={` ${styles.borderRadius24}   `}>
                  <Image
                    src={QrBrands}
                    alt=""
                    className={styles.FlyerImages}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.miniSpacer}`}></div>
        </section>
        <section className="section">
          <div className={`container ${styles.contData}`}>
            <div className={`row `}>
              <div className="col-md-6">
                <div className={`    ${styles.insideinnerdatas}`}>
                  <h3 className={`    ${styles.HeadEasy}`}>Features</h3>
                  <p></p>
                  <p>★ Instant Menu Updates</p>
                  <p>★ QR Code Generator</p>
                  <p>★ Flyers Templates</p>
                  <p>★ Guest Re-Marketing</p>
                  <p>★ User Management</p>
                  <p>★ Alert Management</p>
                  <p>★ Commission Free Payments</p>
                  <p>& Much More …</p>
                  <div className="d-flex justify-content-center">
                    <button
                      className={`btn btn-danger btns ${styles.btns} `}
                      href="https://orderlina.menu/marcelas"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className={` ${styles.borderRadius24}   `}>
                  <Image
                    src={QrFeature}
                    alt=""
                    className={styles.FeatureImages}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.miniSpacer}`}></div>
        </section>
        <section className="section">
          <div className={`container ${styles.contData}`}>
            <div className={`row `}>
              <div className="col-md-6">
                <div className={`    ${styles.insideinnerdata}`}>
                  <h3 className={`    ${styles.HeadEasy}`}>And Their Menus</h3>

                  <div className="d-flex justify-content-center">
                    <button
                      className={`btn btn-danger btns ${styles.btns} `}
                      href="https://orderlina.menu/marcelas"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className={styles["my-swiper"]}
                >
                  <SwiperSlide className={styles["my-swipers"]}>
                    <a className={styles["swiper-slide"]} href="">
                      <div className="post-thumbnail-inner">
                        <img
                          src="https://orderlina.com/wp-content/uploads/2023/01/Screen-Shot-2020-09-26-at-1.16.06-pm-min-1-587x1024.png"
                          className="attachment-medium_large size-medium_large wp-post-image"
                          alt=""
                          decoding="async"
                          loading="lazy"
                          srcSet=""
                        />
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className={styles["my-swipers"]}>
                    <a className={styles["swiper-slide"]} href="">
                      <div className="post-thumbnail-inner">
                        <img
                          src="https://orderlina.com/wp-content/uploads/2023/01/Screen-Shot-2020-09-26-at-2.02.22-pm-min-587x1024.png"
                          className="attachment-medium_large size-medium_large wp-post-image"
                          alt=""
                          decoding="async"
                          loading="lazy"
                          srcSet=""
                        />
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className={styles["my-swipers"]}>
                    <a className={styles["swiper-slide"]} href="">
                      <div className="post-thumbnail-inner">
                        <img
                          src="https://orderlina.com/wp-content/uploads/2023/01/Screen-Shot-2020-09-26-at-1.35.12-pm-min-1-587x1024.png"
                          className="attachment-medium_large size-medium_large wp-post-image"
                          alt=""
                          decoding="async"
                          loading="lazy"
                          srcSet=""
                        />
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className={styles["my-swipers"]}>
                    <a className={styles["swiper-slide"]} href="">
                      <div className="post-thumbnail-inner">
                        <img
                          src="https://orderlina.com/wp-content/uploads/2023/01/Screen-Shot-2020-09-26-at-1.32.43-pm-min-587x1024.png"
                          className="attachment-medium_large size-medium_large wp-post-image"
                          alt=""
                          decoding="async"
                          loading="lazy"
                          srcSet=""
                        />
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className={styles["my-swipers"]}>
                    <a className={styles["swiper-slide"]} href="">
                      <div className="post-thumbnail-inner">
                        <img
                          src="https://orderlina.com/wp-content/uploads/2023/01/Screen-Shot-2020-09-26-at-1.21.57-pm-min-1-587x1024.png"
                          className="attachment-medium_large size-medium_large wp-post-image"
                          alt=""
                          decoding="async"
                          loading="lazy"
                          srcSet=""
                        />
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className={styles["my-swipers"]}>
                    <a className={styles["swiper-slide"]} href="">
                      <div className="post-thumbnail-inner">
                        <img
                          src="https://orderlina.com/wp-content/uploads/2023/01/Screen-Shot-2020-09-26-at-1.12.35-pm-min-1-587x1024.png"
                          className="attachment-medium_large size-medium_large wp-post-image"
                          alt=""
                          decoding="async"
                          loading="lazy"
                          srcSet=""
                        />
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className={styles["my-swipers"]}>
                    <a className={styles["swiper-slide"]} href="">
                      <div className="post-thumbnail-inner">
                        <img
                          src="https://orderlina.com/wp-content/uploads/2023/01/Screen-Shot-2020-09-26-at-1.20.45-pm-min-587x1024.png"
                          className="attachment-medium_large size-medium_large wp-post-image"
                          alt=""
                          decoding="async"
                          loading="lazy"
                          srcSet=""
                        />
                      </div>
                    </a>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className={`${styles.miniSpacer}`}></div>
        </section>
        <section className="section">
          <div className={`container ${styles.contData}`}>
            <div className={`row `}>
              <div className="col-md-6">
                <div className={`    ${styles.insideinnerdata}`}>
                  <h3 className={`    ${styles.HeadEasy}`}>Integrations</h3>
                  <p></p>
                  <p>
                    Streamline by sending orders directly to your Point-Of-Sale
                  </p>
                  <div className="d-flex justify-content-center">
                    <button
                      className={`btn btn-danger btns ${styles.btns} `}
                      href="https://orderlina.menu/marcelas"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      See More..
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className={`${styles["wp-block-kadence-column"]} ${styles["intkadence-column_3cb881-96"]} ${styles["inner-column-1"]}`}
                >
                  <div className={`${styles["intkt-inside-inner-col"]}`}>
                    <div
                      className={`${styles["wp-block-kadence-column"]} ${styles["kadence-column_8f60a4-0c"]} ${styles["inner-column-1"]}`}
                    >
                      <div className={`${styles["intkt-inside-inner-col"]}`}>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/05/755loyverselogo.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://get.hotefy.com/wp-content/uploads/2022/10/oracle-micros.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://get.hotefy.com/wp-content/uploads/2022/10/hoteltime-logo-300x300-1.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://get.hotefy.com/wp-content/uploads/2022/10/ncr-aloha.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/05/Lightspeed-POS-Logo.webp"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://get.hotefy.com/wp-content/uploads/2022/11/impos-logo.jpeg"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/05/POS-Micros-Simphony.webp"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/05/idealPos-fixed.webp"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/05/POS-Square-Logo.webp"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/05/Eposnow-POS-Logo-1.webp"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://get.hotefy.com/wp-content/uploads/2022/10/cloudbeds.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/05/POS-Micros-Res.webp"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/05/POS-Raptor.webp"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/05/swiftPos-fixed.webp"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/05/POS-SplitAbility-Logo.webp"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/05/POS-HL-Logo.webp"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/03/image-8.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/03/image-9-1024x407.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/03/image-10.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://cdn.dachbleche24-shop.de/wp-content/uploads/2021/10/klarna-logo.jpg"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/03/image-11-1024x442.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/03/image-12-867x1024.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://upload.wikimedia.org/wikipedia/en/4/40/OXXO_logo.svg"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.miniSpacer}`}></div>
        </section>
        <section className="section">
          <div className={`container ${styles.contData}`}>
            <div className={`row `}>
              <div className="col-md-6">
                <div className={`    ${styles.insideinnerdataHotel}`}>
                  <h3 className={`    ${styles.HeadEasy}`}>Hotel?</h3>
                  <p></p>
                  <p>
                    For Hotels and other Accommodation venues, please check out
                    our companion product Hotefy
                  </p>
                  <div className="d-flex justify-content-center">
                    <button
                      className={`btn btn-danger btns ${styles.btnsHotel} `}
                      href="https://orderlina.menu/marcelas"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Visit Hotefy
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className={` ${styles.borderRadius24}   `}>
                  <img
                    src="	https://orderlina.com/qr-menus-for-scan-order-and-pay/hotelqrcode2/"
                    alt=""
                    className={styles.KitchenImages}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.miniSpacer}`}></div>
        </section>
        <section className="section">
          <div className={`container ${styles.contData}`}>
            <div className={`row `}>
              <div className="col-md-6">
                <div className={`    ${styles.insideinnerdata}`}>
                  <h3 className={`    ${styles.HeadEasy}`}>In Good Company</h3>
                  <p></p>
                  <p>
                    Join over 4,500 restaurants in over 100 countries in using
                    Orderlina to serve digital menus and ordering to their
                    customers.
                  </p>
                  <div className="d-flex justify-content-center">
                    <button
                      className={`btn btn-danger btns ${styles.btns} `}
                      href="https://orderlina.menu/marcelas"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className={`${styles["wp-block-kadence-column"]} ${styles["kadence-column_3cb881-96"]} ${styles["inner-column-1"]}`}
                >
                  <div className={`${styles["kt-inside-inner-col"]}`}>
                    <div
                      className={`${styles["wp-block-kadence-column"]} ${styles["kadence-column_8f60a4-0c"]} ${styles["inner-column-1"]}`}
                    >
                      <div className={`${styles["kt-inside-inner-col"]}`}>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2020/07/harvest-logo.jpg"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2020/06/Logo-Hippo.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2020/06/logo.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2020/06/cafedelseoul.jpg"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2020/06/nawat-logo.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2020/06/lulus-chocolate-bar.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2020/03/wild-hog-logo.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2020/02/cuckoo-logo.jpg"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/olhf1/o/images%2F-MT6kYGS-LYCv2uB_kKq-communityfoodandjuice%2F79832cfjlogo.png?alt=media&token=cdd7b163-ba35-4ce0-a82c-e32726c075ce"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/orderlina-single-region/o/images%2F-Mb-OruF6YDeEYCXFaep-raclette%2F918raclette_logo_eng_rgb-18.jpg?alt=media&token=c0eccf71-36df-4865-a9e8-64287dcfee7a"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/orderlina-single-region/o/images%2F-MIIY0wdU2cR0LS4VU3g-lucillesdix30%2F708Screen%20Shot%202020-09-28%20at%202.15.57%20pm.png?alt=media&token=20b7aa23-a6be-4f5d-b630-2fe72f1889ad"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/orderlina-single-region/o/images%2F-MLl11Yy_MEHaZ-a_-nS-urbandhaba%2F696urbandhabalogo-011.jpg?alt=media&token=aa2d0bde-edba-4390-b2de-79b282ac15c4"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/orderlina-single-region/o/images%2F-MGDLlgd_udG-LZTf2rR-hawanacafe%2F6logo4-1.png?alt=media&token=294fbe2c-e8b9-414e-a3fa-e208ce9253f7"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/orderlina-single-region/o/images%2F-MDHBLiF0h78HWx-Cnby-limacocinaperuana%2FLOGO_LIMA%202-01.png?alt=media&token=f2725dd5-b6f8-4a5d-a0c2-23b3a290402e"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/orderlina-single-region/o/images%2F-MXgVKo2Cn8WFV1zwto--grandbeirut%2F578grandbeirutlogo.jpeg?alt=media&token=51ebb9e8-b991-493d-9580-f707921b017d"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/olhf1/o/images%2F-Mvu7n-kYtYVn_zLLAMp-milabahrain%2F63857mila_logo-01.jpg?alt=media&token=efee3eaa-729f-4a34-a266-f9a23efe6209"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/orderlina-single-region/o/images%2F-MJi-og6k6DVvk6Swq5X-arabella%2F15427whatsappimage2020-10-15at4.32.46pm.jpeg?alt=media&token=62522640-4675-4688-838b-24fd80a76917"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/orderlina-single-region/o/images%2F-MCx5YJnsTuPkJIUOr3j-looprestaurantcafe%2F173Screen%20Shot%202020-09-01%20at%202.45.58%20pm.png?alt=media&token=f59f265e-7487-41a6-bd6a-e6bf10d40cd4"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/olhf1/o/images%2F-NEweMF5FFE03ILIpZO6-boccacafe%2F75633whatsappimage2022-10-22at18.47.03.jpg?alt=media&token=f31ca13b-0f1c-4c0f-a104-6962844ba50d"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/orderlina-single-region/o/images%2F-MCn7qtlAoFzaB8S7S1o-arkcoffee%2F324ark%20logo.jpg?alt=media&token=f2ca3dda-2e2c-4189-b4ff-b5be2694841a"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/olhf1/o/images%2F-NGrHnNz_1tV1iGEgZtX-ajitapabarandrestaurant%2F66624ajilogo1.png?alt=media&token=0c804383-4225-4336-901e-325fedb4a306"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/olhf1/o/images%2F-N9Zn3o6PebMlc-Nxxr_-thenilebar%2F14465nilelogo.png?alt=media&token=f60f8a6f-4d22-4b80-909a-8408f21df9c2"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://orderlina.com/wp-content/uploads/2023/03/image-12-867x1024.png"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/orderlina-single-region/o/images%2F-MNOPDmYojMSvyYwDz9Q-tonys10%2F208logo.jpg?alt=media&token=46cbfb87-ada8-4635-8ca2-82b60ec10405"
                            alt=""
                          />
                        </figure>
                        <figure
                          className={`${styles["wp-block-image"]} ${styles["size-large"]}`}
                        >
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/orderlina-single-region/o/images%2F-MLN5O0JUdV4jLM_d05b-deuksmokehousemorten%2F53568image-29c9c686-9b60-4dd6-9edd-d6035a08672d.jpg?alt=media&token=cdaf2dc4-f073-42ec-9091-d8b24f721c72"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.miniSpacer}`}></div>
        </section>
        <section className={`section ${styles.lastBack}`}>
        <div className={`${styles.miniSpacer}`}></div> 
          <div className={`container ${styles.contData}`}>
            <div className="row">
              <div className="col-md-6">
                <div className={styles.imageContainer}>
                  <Image
                    src={payScan}
                    alt="Image 1"
                    className={styles.image}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className={styles.buttonContainer}>
                  <div className={styles.buttonHead}>
                    <p>
                      Try Orderlina <br />
                      Now
                    </p>
                    <h5>
                      Try Orderlina on our free plan now and be up and running
                      in less than 10 minutes.
                    </h5>
                  </div>
                  <div className={styles.buttonGroup}>
                    <Link href="/page1">
                      <button className={`btn btn-danger btns ${styles.btns} `}>
                        Sign up
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.miniSpacer}`}></div>
        </section>
        <div className={`${styles.spacer}`}></div>
      </section>
    </>
  );
};

export default Homepage;
