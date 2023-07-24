import React from "react";
import footerStyles from "@/app/styles/footer.module.css";
import Link from "next/link";

export const metadata = {
  url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
};

const Footer = () => {
  return (
    <>
      <footer className={footerStyles.footer}>
        <div className={footerStyles.content}>
          <div className={footerStyles.top}>
            <div className={footerStyles["logo-details"]}>
              <span className={footerStyles.logo_name}>Orderlina</span>
            </div>
            <div className={footerStyles["logo-details"]}>
              <span className={footerStyles.logo_name}>Blog</span>
            </div>
            <div className={footerStyles[`logo-details`]}>
              <h1 className={footerStyles.logo_name}>Orderlina.com</h1>
             
            </div>
          </div>
          <div className={footerStyles["link-boxes"]}>
            <ul className={footerStyles.box}>
              <li className={footerStyles.link_name}>Company</li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="/contact">Contact </a>
              </li>
              <li>
                <a href="#">Invester Relations</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="/privacy-policy-gdpr">Privacy Policy & GDPR</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
            <div >
              <div
                
              >
                <div className="footer-widget-area-inner site-info-inner">
                  <section id="block-9" className="widget widget_block">
                   
                  </section>
                  <section id="block-18" className="widget widget_block">
                    <div className="wp-block-group is-layout-constrained">
                      <div className="wp-block-group__inner-container">
                        <div className="wp-block-columns is-layout-flex wp-container-15">
                          <div
                            className="wp-block-column is-layout-flow"
                           
                          >
                            <ul className="wp-block-latest-posts__list alignleft wp-block-latest-posts ">
                              <li style={{ margin : "6px 0" }}>
                                <a
                                  className="  text-light"
                                  href="/blog1"
                                >
                                  <strong >
                                    QR Code Menus: A Step-By-Step Guide For Your
                                    Restaurant
                                  </strong>
                                </a>
                              </li>
                              <li style={{ margin : "6px 0" }}>
                                <a
                                  className="  text-light"
                                  href="/blog2"
                                >
                                  Top 9 Restaurant Branding Ideas to Grow
                                  Customer Loyalty and Revenues
                                </a>
                              </li>
                              <li style={{ margin : "6px 0" }}>
                                <a
                                  className="  text-light"
                                  href="/blog3"
                                >
                                  Next Step in Restaurant Takeaway &amp;
                                  Delivery, Fast Food Virtual Restaurants Are
                                  the Latest Trend for 2023
                                </a>
                              </li>
                              <li style={{ margin : "6px 0" }}>
                                <a
                                  className="  text-light"
                                  href="/blog4"
                                >
                                  Top 6 Integrations for Restaurant POS Systems
                                </a>
                              </li>
                              <li style={{ margin : "6px 0" }}>
                                <a
                                  className="  text-light"
                                  href="/blog5"
                                >
                                  A Quick Hotel Management Software Buying Guide
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            <ul className={`${footerStyles.box} ${footerStyles["input-box"]}`}>
              <li className={footerStyles.link_name}>Subscribe</li>
              <li>
                <input type="text" placeholder="Enter your email" />
              </li>
              <li>
                <input type="button" value="Subscribe" />
              </li>
            </ul>
          </div>
        </div>
        <div className={footerStyles["bottom-details"]}>
          <div className={footerStyles.bottom_text}>
            <span className={footerStyles.copyright_text}>
              {" "}
              Copyright © 2023
              <Link href="/>"> Orderlina.</Link> ACN 641 053 018 Melbourne Australia{" "}
            </span>
            <span className={footerStyles.policy_terms}>
              <Link href="/">Privacy policy</Link>
              <Link href="/">Terms & condition</Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
