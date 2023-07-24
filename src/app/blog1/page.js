"use client"
import Image from 'next/image';
import styles from '../styles/page.module.css';
// import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// Import Swiper styles
import 'swiper/css';


function RestaurantImage() {
    return (
        <div className={styles['content-areas']}>
            <div className={styles['content-containers']}>
                <div className={styles['content-wraps']}>
                    <div className={styles['post-thumbnail-mains']}>
                        <div className={styles['post-thumbnail-inners']}>
                            <img className={styles['post-thumbnail-imgs']}
                                src="https://orderlina.com/wp-content/uploads/2023/03/QR-CODE-MENU-min-1536x1024.webp"
                                alt="high end restaurant brand interior" />
                        </div>
                    </div>

                    <article className={styles['articles']}>
                        <div className={styles['entry-content-wraps']}>
                            <header className="entry-header post-title title-align-inherit title-tablet-align-inherit title-mobile-align-inherit">
                                <div className="entry-taxonomies">
                                    <span className="category-links term-links category-style-normal">
                                        <a className={styles['text-color']} href="https://orderlina.com/category/marketing/" rel="tag">RESTAURANT</a> | <a className={styles['text-color']} href="https://orderlina.com/category/restaurant/" rel="tag">TECHNOLOGY </a> | <a className={styles['text-color']} href="https://orderlina.com/category/technology/" rel="tag">TIPS & TRICKS</a>
                                    </span>
                                </div>
                                <h1 className={styles['code-menu-text']}>QR Code Menus: A Step-By-Step Guide For Your Restaurant</h1>
                                <div className={styles['by-content-text']}>
                                    <span className="posted-by">
                                        <span className="meta-label">By</span>
                                        <span className="author vcard"><a className="url fn n" href="https://orderlina.com/author/shaun/">Shaun.</a></span>
                                    </span>
                                    <span className="posted-on">
                                        <time className="entry-date published" dateTime="2023-01-08T07:30:21-05:00">
                                            March 17, 2023</time>

                                    </span>
                                </div>
                            </header>
                            <div className='entry-content single-content'>
                                <h2 className={`wp-block-heading ${styles.headcontent} `} ><strong>Introduction</strong></h2>
                                <p className={styles['text-paragraph']}>In recent years, technology has transformed the way restaurants operate, and QR code menus have played no small part. QR code menus offers a convenient way for customers to access the restaurant’s menu on their own devices but for many restauranteurs that are not tech-savvy the idea of creating a QR code menu may seem daunting.</p>


                                <div className="wp-block-image size-large " >
                                    <img className={styles['post-thumbnail-imgs']}
                                        src="https://orderlina.com/wp-content/uploads/2023/03/QR-CODE-MENU-min-1536x1024.webp"
                                        alt="restaurant brand vision mission core values" />
                                </div>
                                <p className={styles['text-paragraph']}>This article provides a step-by-step guide from selecting a QR code menu app to implementation. Whether you’re looking to enhance the dining experience or increase profits, a QR code menu is a cost-effective and versatile solution that’s worth considering. So, let’s dive into this guide and learn how to create a QR code menu.</p>
                                <h2 className={`wp-block-heading ${styles.headcontent} `} > What is a QR Code Menu?</h2>

                                <div className="wp-block-image">
                                    <img className={styles['post-thumbnail-imgs']}
                                        src="https://orderlina.com/wp-content/uploads/2023/03/QR-CODE-MENU-10-1024x256.webp"

                                    />
                                </div>
                                <p className={styles['text-paragraph']}>A QR code menu is a digital version of a traditional restaurant menu that customers can access using their smartphones. QR codes, short for Quick Response codes, are two-dimensional barcodes that can be scanned using a smartphone camera or a QR code reader app. When scanned, the QR code takes the customer to a digital menu, where they can browse through different menu items, view images and descriptions, and make their selections. Additionally, QR code menus offer restaurants an opportunity to update their menus quickly and easily, reducing printing costs.</p>

                                <figure className="wp-block-image size-large">
                                    <img className={styles['post-thumbnail-imgs']}
                                        src="https://orderlina.com/wp-content/uploads/2023/03/QR-CODE-MENU-2-1024x694.webp"
                                        alt="restaurant menu as a marketing channel"

                                    />
                                </figure>
                                <h2 className={`wp-block-heading ${styles.headcontent} `} >FAQ</h2>
                                <p className={styles['text-paragraph']}>We’ve compiled a list of common FAQs about QR code menus that might help:</p>
                                <p className={styles['second-head-text']}><strong>How hard is this going to be?</strong></p>
                                <pre className={styles['text-box']}><code>They are so common now that that it's simply the case of choosing a QR Menu app that is EASY to use</code></pre>
                                <figure className="wp-block-image size-large">
                                    <img className={styles['post-thumbnail-imgs']}
                                        src="https://orderlina.com/wp-content/uploads/2023/03/QR-CODE-MENU-2-1024x694.webp"
                                        alt="restaurant menu as a marketing channel"

                                    />
                                </figure>
                                <div>
                                    <p className={styles['second-head-text']}><strong>Do customers need to download an app to use a QR code menu?</strong></p>
                                    <pre className={styles['text-box']}><code>No, customers use their phone camera to scan the QR code and the menu loads automatically.</code></pre>
                                    <pre className={styles['text-box']}><code>The younger ones do. They are less popular with older customers. Customers with visual impairments or without smartphones might not be able to use QR code menus. Therefore, it's important to provide alternative options like a paper menu or a verbal description of menu items.</code></pre>

                                    <p className={styles['second-head-text']}><strong>How do I ensure the QR code menu is user-friendly?</strong></p>
                                    <pre className={styles['text-box']}><code>Choose one that you find user friendly. Test their demo, if you think it is, most likely your customers will too. To make QR code menus more user-friendly you can add visually appealing categories, images, and descriptions. The QR code should be placed in a prominent location, and the menu should be easy to navigate with clear instructions on how to use the QR code.</code></pre>
                                    <p className={styles['second-head-text']}><strong>How much does a QR code menu cost?</strong></p>
                                    <pre className={styles['text-box']}><code>The cost of QR code menus varies depending on the features you need. While some options are free, others can cost up to $300 per month for customized, branded, and POS-integrated solutions.</code></pre>
                                    <p className={styles['second-head-text']}><strong>Can QR codes be added to physical menus?</strong></p>
                                    <pre className={styles['text-box']}><code>Absolutely! QR codes can be added to physical menus by downloading a JPG, SVG or PNG QR Code image.</code></pre>

                                    <p className={styles['second-head-text']}><strong>Can paper menus still be used alongside QR code menus?</strong></p>

                                    <pre className={styles['text-box']}><code>Yes, of course. Some customers might prefer physical menus, so it's a good idea to have both.</code></pre>
                                    <p className={styles['second-head-text']}><strong>Can the menu be accessed online without scanning the QR code?</strong></p>
                                    <pre className={styles['text-box']}><code>Yes, it can! The menu is now available as a website, and you can access it online by visiting its web address, even without scanning the QR code.</code></pre>
                                </div>
                                <div>
                                    <h2 className={`wp-block-heading ${styles.headcontent} `} >Why Use a QR Code Menu?</h2>
                                    <p className={styles['text-paragraph']}>QR code menus have become increasingly popular among restaurants and bars, and for good reason. Here are several reasons why implementing a QR code menu can benefit your business:</p>

                                    <figure className="wp-block-image size-large">
                                        <img className={styles['post-thumbnail-imgs']}
                                            src="https://orderlina.com/wp-content/uploads/2023/03/QR-CODE-MENU-4-1024x681.webp"
                                            alt="restaurant feeding homeless people outdoors"
                                        />
                                    </figure>
                                    <ol className={styles['text-paragraph']}>
                                        <li><strong>Increase Basket Size –  </strong>QR code menus when implemented properly are are shown to increase baskets by 30%</li>

                                        <li><strong>Decrease Staff – </strong>Whether you offer both QR and physical menus or only QR menus, you will find that you need less wait staff</li>

                                        <li><strong>Fewer Errors –</strong> QR code ordering reduces errors at all stages of the order and delivery process</li>

                                        <li><strong>Reduce Costs –  </strong>QR code menus reduce the need to print new menus when items are updated. If you implement QR codes alongside paper menus, you will find a reduction in wear an tear of the paper menus</li>



                                        <li><strong>Social Media –  </strong>QR code menus can integrate you facebook marketing cookies and can also provide share options so your customers can directly share your menu. </li>



                                        <li><strong>Customer Demand –</strong> Younger customer might expect a digital menu option</li>



                                        <li><strong>Table Turns</strong> – Speed up table turnover as customers order and pay when they are ready </li>



                                        <li><strong>Out of Stock</strong> – Real time menu updates means less chance of customer dissatisfaction when trying to order an unavailable item</li>



                                        <li><strong>Experience</strong> – Providing a better menu experience through menu item search, filter by diet, re-ordering past orders</li>



                                        <li><strong>Data – </strong>Access data on customer preferences; what they clicked on most this week. Customer feedback through the app.</li>



                                        <li><strong>Special of the Day – </strong>Are available at the top of the menu and need not be reliant on staff selling.</li>
                                    </ol>
                                </div>
                                <div>
                                    <h2 class="wp-block-heading">How Do I Get a QR Code Menu For My Restaurant</h2>

                                    <p className={styles['text-paragraph']}>Follow these steps to get a QR Code menu and implement it:</p>
                                    <ol className={styles['text-paragraph']}>
                                        <li><strong>Choose a QR Menu Solution – </strong>We recommend <a className={styles['text-content-a']} href="https://orderlina.com" title="">Orderlina.com</a> but <a className={styles['text-content-a']} href="https://orderlina.com/best-qr-menu-for-restaurants-and-hotels/" title="">here</a> is a list of great alternatives. Choose one that allows you test it for free and has customer testimonial freely available.</li>
                                        <li><strong>Create Menu – </strong>Upload your menu, logo, and branding colors..</li>

                                        <li><strong>QR – </strong>Create a QR code and flyer, this can be done inside the QR Menu solution you chose in step 1. You can use the same QR code for every table or have a different one for each table number. If selecting the former option the customer has to select their table number manually and this should be visible to them.</li>
                                        <li><strong>Flyer</strong> – Create a flyer that represents your brand. Orderlina provides many free flyer templates you can edit to reflect your brand. Assist older generations with “how to scan” instructions.</li>
                                        <li><strong>Print</strong> – Print the flyers.&nbsp;</li>
                                        <li><strong>Place – </strong>Place on tables so they are easily visible. Ideally they are vertical. You can also place QR codes at the entrance and in waiting areas. You can place them on windows to display your menu to passers-by. You can also place the QR code on existing paper menus.</li>
                                    </ol>
                                </div>
                                <div>
                                    <h2 className={`wp-block-heading ${styles.headcontent} `} >Types </h2>
                                    <div className="wp-block-image">
                                        <figure className="aligncenter size-large">
                                            <img className={styles['post-thumbnail-imgs']}
                                                src="https://orderlina.com/wp-content/uploads/2023/03/QR-CODE-MENU-7-1024x683.webp"
                                            />
                                        </figure>
                                    </div>

                                    <p className={styles['text-paragraph']}>There are a few different types of QR code menus available, including:</p>

                                    <ol className={styles['text-paragraph']}>
                                        <li><strong>View Only:</strong> These are simple menus that are available in PDF of JPG or PNG image format. Customers can scan the QR code and access the static menu on their smartphone or tablet.</li>
                                        <li><strong>View Only Interactive –</strong> Customers can change the language, or save items to a basket. But customer must order by calling a server</li>
                                        <li><strong>Ordering –</strong>These menus allow the customer to order</li>
                                        <li><strong>Ordering and Pay –</strong> These menus allow the customer to order and pay</li>

                                    </ol>
                                    <p>For the Ordering and Ordering+Pay menus, orders can either be sent to the solution order queue, a kitchen display screen, sent to the existing POS for print and handling of tickets and receipts. This should all be possible and intuitively handled by a complete QR menu solution.</p>
                                </div>
                                <div>
                                    <h2 className={`wp-block-heading ${styles.headcontent} `} >Drawbacks</h2>
                                    <p className={styles['text-paragraph']}>While QR code menus offer many benefits, there are some drawbacks to consider, including:</p>
                                    <div className="wp-block-image">
                                        <figure className="aligncenter size-large">
                                            <img className={styles['post-thumbnail-imgs']}
                                                src="https://orderlina.com/wp-content/uploads/2023/03/QR-CODE-MENU-8-1024x684.webp"
                                                alt="multi channel marketing"
                                            />
                                        </figure>
                                    </div>

                                    <ol className={styles['text-paragraph']}>
                                        <li>May lead to <strong>less personal interaction with servers</strong>, potentially impacting the overall dining experience</li>
                                        <li>Customers may <strong>need to have a smartphone</strong> to access the menu, which could exclude some individuals</li>
                                        <li><strong>Older customers or those who are less tech-savvy</strong> may find it harder</li>
                                        <li>QR code menus <strong>can be a distraction</strong> if the technology doesn’t work properly or if the diner spends too much time looking at their phone instead of engaging with their companions</li>

                                        <li>The technology may be new to some customers, <strong>requiring additional time to learn</strong> and navigate the menu.</li>
                                    </ol>
                                </div>
                                <div>
                                    <h2 class="wp-block-heading">Special Features</h2>
                                    <p className={styles['text-paragraph']}>Some QR code menu solutions may offer some additional features that you might find useful, including:</p>
                                    <div className="wp-block-image">
                                        <figure className="aligncenter size-large">
                                            <img className={styles['post-thumbnail-imgs']}
                                                src="https://orderlina.com/wp-content/uploads/2023/03/QR-CODE-MENU-6-1024x683.webp"
                                                alt="woman food blogger vlog"
                                            />
                                        </figure>
                                        <ul className={styles['text-paragraph']}>
                                            <li><strong>Integration with email marketing</strong> platforms</li>
                                            <li><strong>Facebook Pixel integration</strong> to engage guests even after they leave</li>
                                            <li>Direct <strong>online ordering for delivery</strong> and pick up</li>
                                            <li>Custom <strong>branding options</strong>, including landing page and info page</li>
                                            <li><strong>Multiple language support</strong> </li>
                                            <li><strong>Guest feedback options</strong> to gain insight and connect with guests</li>
                                            <li>Ability for guests to <strong>save favorite menu items</strong></li>
                                            <li>Integration with <strong>loyalty programs</strong></li>
                                            <li><strong>Analytics and reporting on menu item popularity</strong> and sales</li>
                                        </ul>
                                    </div>


                                    <p className={styles['text-paragraph']}>YouTube videos, on the other hand, will require some degree of effort and investment into high-quality equipment and videography skills. If you can do that, then irresistible videos of your dishes will reach millions of people worldwide. With a bit of marketing genius, you can go viral too.</p>
                                </div>
                                <div>
                                    <h2 className={`wp-block-heading ${styles.headcontent} `} >Tips</h2>
                                    <p>Here are some tips for creating a better QR code menu for your restaurant: </p>
                                    <div className="wp-block-image">
                                        <figure className="aligncenter size-large">
                                            <img className={styles['post-thumbnail-imgs']}
                                                src="https://orderlina.com/wp-content/uploads/2023/03/QR-CODE-MENU-3-jpg.webp"
                                                alt="woman food blogger vlog"
                                            />
                                        </figure>
                                    </div>
                                    <ul>
                                        <li>Customize your menu with <strong>categories, color schemes</strong>, product descriptions, and <strong>images</strong>.</li>
                                        <li>Choose a QR code solution that allows for <strong>self-service creation</strong> <strong>and updating of the menu</strong>, <strong>without requiring customers to download an app</strong>, and with pre-optimized templates that have the <strong>right color and contrast</strong>.</li>
                                        <li>Include a <strong>call-to-action on the QR code</strong>, and make sure the menu is easy to navigate and visually appealing.</li>
                                        <li><strong>Display the QR code prominently</strong> and make it easily accessible to customers.</li>
                                        <li><strong>Provide additional information like nutritional and allergen information</strong>, and promotions through the QR code to enhance the dining experience for your customers.</li>
                                        <li><strong>Keep your menu updated</strong> and make changes as necessary to reflect seasonal items, specials, or other updates.</li>
                                        <li><strong>Conduct user testing to ensure that your menu is user-friendly</strong> and easy to navigate.</li>
                                        <li>Consider using QR codes for other purposes, such as providing <strong>payment options</strong> or linking to your <strong>restaurant’s social media accounts</strong>.</li>
                                    </ul>
                                </div>

                                <h2 className={`wp-block-heading ${styles.headcontent} `} ><strong>Best QR Code Menus&nbsp;</strong></h2>
                                <p>In choosing a QR Code Menu solution, there are many options, here are 5 that we have tested and we consider the best in the industry at the moment:</p>
                                <ol>
                                    <li ><a className={styles['text-content-a']} href="https://orderlina.com/">Orderlina</a></li>
                                    <li ><a className={styles['text-content-a']} href="http://www.eatsee.menu/">EatSea</a></li>
                                    <li><a className={styles['text-content-a']} href="http://www.bonee.net/">Bonee</a></li>
                                    <li><a className={styles['text-content-a']} href="http://www.menulingua.com/">MenuLingua</a></li>
                                    <li><a className={styles['text-content-a']} href="http://www.wmenu.com/">Menu</a></li>
                                </ol>
                            </div>
                            <h2 className={`wp-block-heading ${styles.headcontent} `} ><strong>Conclusion</strong></h2>
                            <figure className="aligncenter size-large">
                                <img className={styles['post-thumbnail-imgs']}
                                    src="https://orderlina.com/wp-content/uploads/2023/03/QR-CODE-MENU-5-1024x683.webp"
                                    alt="woman food blogger vlog"
                                />
                            </figure>
                            <p className={styles['text-paragraph']}>To sum up, QR code menus are a convenient solution for restaurants to offer their customers. They provide a cost-effective and versatile option for presenting menus that is accessible and engaging for customers. By following the step-by-step guide, restaurants can create a visually appealing and user-friendly QR code menu that both enhances the dining experience and as well as increase profits for your restaurant.</p>
                            <span class="tags-links">
                              
                                <a href="https://orderlina.com/tag/qr-code-menu/" title="QR Code Menu" class="tag-link tag-item-qr-code-menu" rel="tag"><span class="tag-hash">#</span>QR Code Menu</a>	</span>
                        </div>

                    </article>
                    <nav className={styles['post-navigation']} aria-label="Posts">
                        <div className={styles['nav-links']}>
                            <div className={styles['nav-previous']}>
                                <a href="https://orderlina.com/top-9-restaurant-branding-ideas-to-grow-customer-loyalty-and-revenues/" rel="prev">
                                    <div className={styles['post-navigation-sub']}>
                                        <small>
                                            <span className="kadence-svg-iconset svg-baseline">
                                                <svg
                                                    aria-hidden="true"
                                                    className="kadence-svg-icon kadence-arrow-left-alt-svg"
                                                    fill="currentColor"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="29"
                                                    height="28"
                                                    viewBox="0 0 29 28"
                                                >
                                                    <title>Previous</title>
                                                    <path d="M28 12.5v3c0 0.281-0.219 0.5-0.5 0.5h-19.5v3.5c0 0.203-0.109 0.375-0.297 0.453s-0.391 0.047-0.547-0.078l-6-5.469c-0.094-0.094-0.156-0.219-0.156-0.359v0c0-0.141 0.063-0.281 0.156-0.375l6-5.531c0.156-0.141 0.359-0.172 0.547-0.094 0.172 0.078 0.297 0.25 0.297 0.453v3.5h19.5c0.281 0 0.5 0.219 0.5 0.5z"></path>
                                                </svg>
                                            </span>
                                            Previous
                                        </small>
                                    </div>
                                    Next Step in Restaurant Takeaway & Delivery, Fast Food Virtual Restaurants Are the Latest Trend for 2023
                                </a>
                            </div>
                          
                        </div>
                    </nav>
                    
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className={styles['my-swiper']}
                    >
                        <SwiperSlide className={styles['my-swipers']} >
                            <a className="post-thumbnail kadence-thumbnail-ratio-2-3" href="https://orderlina.com/top-9-restaurant-branding-ideas-to-grow-customer-loyalty-and-revenues/">
                                <div className="post-thumbnail-inner">
                                    <img src="https://orderlina.com/wp-content/uploads/2023/01/interior-of-a-restaurant-2022-11-11-07-09-49-utc-768x582.jpg"
                                        className="attachment-medium_large size-medium_large wp-post-image" alt="Top 9 Restaurant Branding Ideas to Grow Customer Loyalty and Revenues" decoding="async" loading="lazy" srcset="https://orderlina.com/wp-content/uploads/2023/01/interior-of-a-restaurant-2022-11-11-07-09-49-utc-768x582.jpg 768w, https://orderlina.com/wp-content/uploads/2023/01/interior-of-a-restaurant-2022-11-11-07-09-49-utc-300x227.jpg 300w, https://orderlina.com/wp-content/uploads/2023/01/interior-of-a-restaurant-2022-11-11-07-09-49-utc-1024x776.jpg 1024w, https://orderlina.com/wp-content/uploads/2023/01/interior-of-a-restaurant-2022-11-11-07-09-49-utc-1536x1164.jpg 1536w, https://orderlina.com/wp-content/uploads/2023/01/interior-of-a-restaurant-2022-11-11-07-09-49-utc.jpg 1600w" />
                                </div>
                            </a>

                            <h3 className={styles['slide-title']}><a className={styles['slide-h']} href="https://orderlina.com/top-9-restaurant-branding-ideas-to-grow-customer-loyalty-and-revenues/" rel="bookmark">Top 9 Restaurant Branding Ideas to Grow Customer Loyalty and Revenues</a></h3>
                            <div className={styles['slide-p']}
                            ><span className={styles['slide-posted']}>
                                    <span className={styles['slide-p-label']}>By</span>
                                    <span className={styles['slide-p-vcard']}>
                                        <a className={styles['slide-p-vcards']} href="https://orderlina.com/author/dartwriter101gmail-com/">Suraj</a></span></span>
                                <span className={styles['slide-p-on']}><time className="entry-date published" datetime="2023-01-08T07:30:21-05:00">January 8, 2023</time></span></div>
                        </SwiperSlide>
                        <SwiperSlide className={styles['my-swipers']}>
                            <a className="post-thumbnail kadence-thumbnail-ratio-2-3" href="https://orderlina.com/how-to-create-a-digital-menu-for-restaurants-or-hotels/">
                                <div className="post-thumbnail-inner">
                                    <img src="https://orderlina.com/wp-content/uploads/2019/09/iphone-6-mockup-of-a-woman-holding-an-iphone-by-the-pool-a3211-1-min-768x271.jpg" className="attachment-medium_large size-medium_large wp-post-image" alt="How to Create a Digital Menu for Restaurants or Hotels (and Why!)" decoding="async" loading="lazy" srcset="https://orderlina.com/wp-content/uploads/2019/09/iphone-6-mockup-of-a-woman-holding-an-iphone-by-the-pool-a3211-1-min-768x271.jpg 768w, https://orderlina.com/wp-content/uploads/2019/09/iphone-6-mockup-of-a-woman-holding-an-iphone-by-the-pool-a3211-1-min-600x212.jpg 600w, https://orderlina.com/wp-content/uploads/2019/09/iphone-6-mockup-of-a-woman-holding-an-iphone-by-the-pool-a3211-1-min-300x106.jpg 300w, https://orderlina.com/wp-content/uploads/2019/09/iphone-6-mockup-of-a-woman-holding-an-iphone-by-the-pool-a3211-1-min-1024x362.jpg 1024w, https://orderlina.com/wp-content/uploads/2019/09/iphone-6-mockup-of-a-woman-holding-an-iphone-by-the-pool-a3211-1-min-1536x542.jpg 1536w, https://orderlina.com/wp-content/uploads/2019/09/iphone-6-mockup-of-a-woman-holding-an-iphone-by-the-pool-a3211-1-min.jpg 1920w" />
                                </div>
                            </a>
                            <h3 className={styles['slide-title']}><a className={styles['slide-h']} href="https://orderlina.com/how-to-create-a-digital-menu-for-restaurants-or-hotels/" rel="bookmark">How to Create a Digital Menu for Restaurants or Hotels (and Why!)</a></h3>
                            <div className={styles['slide-p']}>
                                <span className={styles['slide-posted']}>
                                    <span className={styles['slide-p-label']}>By</span>
                                    <span className={styles['slide-p-vcard']}>
                                        <a className={styles['slide-p-vcards']} href="https://orderlina.com/author/rohan/">rohan</a></span></span>
                                <span className={styles['slide-p-on']}>
                                    <time className="entry-date published" datetime="2019-09-10T07:53:42-04:00">September 10, 2019</time></span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles['my-swipers']}>
                            <h3 className={styles['slide-title']}><a className={styles['slide-h']} href="https://orderlina.com/a-qr-menu-for-restaurants-is-contactless-not-hospitality-less/" rel="bookmark">Do QR Codes in Restaurants Make the Menu Contactless, But The Service “Hospitality-Less?”</a></h3>
                            <div className={styles['slide-p']}>
                                <span className={styles['slide-posted']}>
                                    <span className={styles['slide-p-label']}>By</span>
                                    <span className={styles['slide-p-vcard']}>
                                        <a className={styles['slide-p-vcards']} href="https://orderlina.com/author/rohan/">rohan</a></span></span>
                                <span className={styles['slide-p-on']}>
                                    <time className="entry-date published" datetime="2021-02-11T08:14:19-05:00">February 11, 2021</time></span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles['my-swipers']}>
                            <a className="post-thumbnail kadence-thumbnail-ratio-2-3" href="https://orderlina.com/next-step-in-restaurant-takeaway-delivery-fast-food-virtual-restaurants-are-the-latest-trend-for-2023/">
                                <div className="post-thumbnail-inner">
                                    <img src="https://orderlina.com/wp-content/uploads/2023/01/restaurant-chef-at-everyday-work-2021-08-26-20-16-05-utc-min-768x513.jpg" className="attachment-medium_large size-medium_large wp-post-image" alt="Next Step in Restaurant Takeaway &amp; Delivery, Fast Food Virtual Restaurants Are the Latest Trend for 2023" decoding="async" loading="lazy" srcset="https://orderlina.com/wp-content/uploads/2023/01/restaurant-chef-at-everyday-work-2021-08-26-20-16-05-utc-min-768x513.jpg 768w, https://orderlina.com/wp-content/uploads/2023/01/restaurant-chef-at-everyday-work-2021-08-26-20-16-05-utc-min-300x200.jpg 300w, https://orderlina.com/wp-content/uploads/2023/01/restaurant-chef-at-everyday-work-2021-08-26-20-16-05-utc-min-1024x684.jpg 1024w, https://orderlina.com/wp-content/uploads/2023/01/restaurant-chef-at-everyday-work-2021-08-26-20-16-05-utc-min-1536x1025.jpg 1536w, https://orderlina.com/wp-content/uploads/2023/01/restaurant-chef-at-everyday-work-2021-08-26-20-16-05-utc-min.jpg 1561w" />
                                </div>
                            </a>
                            <h3 className={styles['slide-title']}><a className={styles['slide-h']} href="https://orderlina.com/next-step-in-restaurant-takeaway-delivery-fast-food-virtual-restaurants-are-the-latest-trend-for-2023/" rel="bookmark">Next Step in Restaurant Takeaway &amp; Delivery, Fast Food Virtual Restaurants Are the Latest Trend for 2023</a></h3>
                            <div className={styles['slide-p']}>
                                <span className={styles['slide-posted']}>
                                    <span className={styles['slide-p-label']}>By</span>
                                    <span className={styles['slide-p-vcard']}>
                                        <a className={styles['slide-p-vcards']} href="https://orderlina.com/author/rohan/">Suraj</a></span></span>
                                <span className={styles['slide-p-on']}>
                                    <time className="entry-date published" datetime="2023-01-06T15:33:48-05:00">January 6, 2023</time></span>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className={styles['my-swipers']}>
                            <h3 className={styles['slide-title']}><a className={styles['slide-h']} href="https://orderlina.com/a-qr-code-sign-in-for-restaurants-should-also-include-ordering/" rel="bookmark">In 2023, QR Code Sign-In is Not Enough. Restaurants Must Offer QR Code Ordering Too</a></h3>
                            <div className={styles['slide-p']}>
                                <span className={styles['slide-posted']}>
                                    <span className={styles['slide-p-label']}>By</span>
                                    <span className={styles['slide-p-vcard']}>
                                        <a className={styles['slide-p-vcards']} href="https://orderlina.com/author/rohan/">rohan</a></span></span>
                                <span className={styles['slide-p-on']}>
                                    <time className="entry-date published" datetime="2020-08-13T08:49:11-04:00">August 13, 2020</time>
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles['my-swipers']}>
                            <a className="post-thumbnail kadence-thumbnail-ratio-2-3" href="https://orderlina.com/best-qr-menu-for-restaurants-and-hotels/">
                                <div className="post-thumbnail-inner">
                                    <img width="768" height="576" src="https://orderlina.com/wp-content/uploads/2021/03/branding-mockup-featuring-a-napkin-at-a-restaurant-table-a6854-1-768x576-min.jpg" className="attachment-medium_large size-medium_large wp-post-image" alt="8 Best QR Menus for Restaurants in 2023" decoding="async" loading="lazy" srcset="https://orderlina.com/wp-content/uploads/2021/03/branding-mockup-featuring-a-napkin-at-a-restaurant-table-a6854-1-768x576-min.jpg 768w, https://orderlina.com/wp-content/uploads/2021/03/branding-mockup-featuring-a-napkin-at-a-restaurant-table-a6854-1-768x576-min-600x450.jpg 600w, https://orderlina.com/wp-content/uploads/2021/03/branding-mockup-featuring-a-napkin-at-a-restaurant-table-a6854-1-768x576-min-300x225.jpg 300w" />
                                </div>
                            </a>
                            <h3 className={styles['slide-title']}><a className={styles['slide-h']} href="https://orderlina.com/best-qr-menu-for-restaurants-and-hotels/" rel="bookmark">8 Best QR Menus for Restaurants in 2023</a></h3>
                            <div className={styles['slide-p']}>
                                <span className={styles['slide-posted']}>
                                    <span className={styles['slide-p-label']}>By</span>
                                    <span className={styles['slide-p-vcard']}>
                                        <a className={styles['slide-p-vcards']} href="https://orderlina.com/author/rohan/">rohan</a></span></span>
                                <span className={styles['slide-p-on']}>
                                    <time className="entry-date published" datetime="2020-01-27T02:18:32-05:00">January 27, 2020</time>
                                </span>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                

                    <div id="comments" className={styles['comments-area']}>
                        <div id="respond" className="comment-respond">
                            <h3 id="reply-title" className="comment-reply-title">
                                Leave a Reply{' '}
                                <small>
                                    <a
                                        rel="nofollow"
                                        id="cancel-comment-reply-link"
                                        href="/top-9-restaurant-branding-ideas-to-grow-customer-loyalty-and-revenues/#respond"
                                        style={{ display: 'none' }}
                                    >
                                        Cancel reply
                                    </a>
                                </small>
                            </h3>
                            <form
                                action="YOUR_FORM_SUBMISSION_ROUTE"
                                method="post"
                                id="commentform"
                                className="comment-form"
                                noValidate
                            >
                                <p className={styles['comment-notes']}>
                                    <span id="email-notes">Your email address will not be published.</span>{' '}
                                    <span className="required-field-message">
                                        Required fields are marked <span className="required">*</span>
                                    </span>
                                </p>
                                <p className={styles['comment-input-text']}>
                                    <textarea
                                        id="comment"
                                        name="comment"
                                        placeholder="Leave a comment..."
                                        cols="45"
                                        rows="8"
                                        className={styles['textarea-comment']}
                                        maxLength="65525"
                                        aria-required={true}
                                        required={true}
                                    ></textarea>
                                    <label className={styles['float-labels']} htmlFor="comment">
                                        Comment <span className={styles['required-s']}>*</span>
                                    </label>
                                </p>
                                <div className={styles['comment-input-wrap']}>
                                    <p className={styles['comment-form-author']}>
                                        <input
                                            aria-label="Name"
                                            id="author"
                                            name="author"
                                            type="text"
                                            placeholder="John Doe"
                                            value=""
                                            size="30"
                                            maxLength="245"
                                            className={styles['input']}
                                            aria-required={true}
                                            required={true}
                                        />
                                        <label className={styles['float-label']} htmlFor="author">
                                            Name <span className={styles['required-s']}>*</span>
                                        </label>
                                    </p>
                                    <p className={styles['comment-input-email']}>
                                        <input
                                            aria-label="Email"
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            value=""
                                            size="30"
                                            maxLength="100"
                                            className={styles['input']}
                                            aria-describedby="email-notes"
                                            aria-required={true}
                                            required={true}
                                        />
                                        <label className={styles['float-label']} htmlFor="email">
                                            Email <span className={styles['required-s']}>*</span>
                                        </label>
                                    </p>
                                    <p className={styles['comment-form-url']}>
                                        <input
                                            aria-label="Website"
                                            id="url"
                                            name="url"
                                            type="url"
                                            placeholder="https://www.example.com"
                                            value=""
                                            size="30"
                                            maxLength="200"
                                            className={styles['input']}
                                        />
                                        <label className={styles['float-label']} htmlFor="url">
                                            Website
                                        </label>
                                    </p>
                                </div>
                                <p className="comment-form-cookies-consent">
                                    <input
                                        id="wp-comment-cookies-consent"
                                        name="wp-comment-cookies-consent"
                                        type="checkbox"
                                        value="yes"
                                    />{' '}
                                    <label htmlFor="wp-comment-cookies-consent">
                                        Save my name, email, and website in this browser for the next time I comment.
                                    </label>
                                </p>
                                <p className="form-submit">
                                    <input
                                        name="submit"
                                        type="submit"
                                        id="submit"
                                        className={styles['btn-submit']}
                                        value="Post Comment"
                                    />{' '}
                                    <input
                                        type="hidden"
                                        name="comment_post_ID"
                                        value="8204"
                                        id="comment_post_ID"
                                    />
                                    <input type="hidden" name="comment_parent" id="comment_parent" value="0" />
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    );
}

export default RestaurantImage;
