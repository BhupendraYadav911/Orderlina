"use client"
import Image from 'next/image';
import styles from '../styles/blog.module.css';
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
        <div className={styles['content-area']}>
            <div className={styles['content-container']}>
                <div className={styles['content-wrap']}>
                   
              <div className={styles['main-article']}>
                    <article className={styles['articles']}>
                        <div className={styles['entry-content-wrap']}>
                            <header className="entry-header post-title title-align-inherit title-tablet-align-inherit title-mobile-align-inherit">
                                <div className={styles['entry-taxonomies']}>
                                    <span className="category-links term-links category-style-normal">
                                        <a href="https://orderlina.com/category/marketing/" rel="tag">UNCATEGORIZED</a>
                                    </span>
                                </div>
                                <h1 className={styles['entry-title']}>Top 6 Integrations for Restaurant POS Systems</h1>
                                <div className={styles['entry-meta']}>
                                    <span className="posted-by">
                                        <span className={styles['meta-label']}>By</span>
                                        <span className={styles['author-vcard']}><a className="url fn n" href="https://orderlina.com/author/dartwriter101gmail-com/">Suraj</a></span>
                                    </span>
                                    <span className="posted-on">
                                        <time className="entry-date published" dateTime="2023-01-08T07:30:21-05:00">
                                            October 29, 2022</time>
                                    </span>
                                </div>
                            </header>
                            <div className='entry-content single-content'>
                                <div className={styles['wp-block-image']}>
                                    <img className={styles['block-img']}
                                        src="https://orderlina.com/wp-content/uploads/2022/10/3-1-1024x395.jpeg"
                                        alt="restaurant brand vision mission core values" />
                                </div>
                                <p>Every successful restaurant owner swears by their restaurant POS systems. After all, a worthy POS system allows them to optimize their business operations, costs, and customer services, ultimately making them more competitive in their industry.</p>

                                <p>However, restaurant POS systems are only as good as their most recent update. You cannot expect to use outdated technology to help you increase your revenues in a rapidly changing economy. But restauranteurs cannot change their POS system every time a new POS system launches an upgrade. That is why POS integrations exist.</p>

                                <p>2018 witnessed GrubHub integrating with 5 POS systems, and Uber Eats buying orderTalk for its POS integration capabilities. Come 2020 and restaurant businesses were struggling to survive the pandemic restrictions. Fortunately, online food delivery witnessed an uptick and helped ease the existential crisis facing most restaurants. Very soon, restaurants that understood their customers’ evolving needs adapted to them and became more popular and profitable. And POS integrations helped them adapt to these challenges.

                                </p>


                                <h2 class="wp-block-heading">What Is a POS Integration?</h2>

                                <p>Integrations for restaurant POS systems have become a huge trend in the industry. You are ideally expanding the functionalities of your POS system to include inventory management, accounting capabilities, online ordering features, and more. When more systems can interact with each other, your business can run more smoothly.</p>

                                <p>By the end of the day, you get a well-rounded picture of your business, from your staff to operations to customer management, with a restaurant management system. The more your POS system can integrate with other software, the more efficient your restaurant business can become.</p>


                                <h2 class="wp-block-heading">Which Are the Highly Recommended Restaurant POS Integrations You Should Get?</h2>
                                <figure className={styles['wp-block-image']}>
                                    <img className={styles['block-img']}
                                        src="https://orderlina.com/wp-content/uploads/2022/10/333333333.jpeg"
                                        alt="restaurant menu as a marketing channel"

                                    />
                                </figure>

                                <p>If you are a restaurant owner looking to improve your customer satisfaction, business operations, and bottom line, here are the top integrations to help you create the best restaurant POS system for your restaurant.</p>
                                <h2 class="wp-block-heading">Finding New Customers</h2>

                                <figure className={styles['wp-block-image']}>
                                    <img className={styles['block-img']}
                                        src="https://orderlina.com/wp-content/uploads/2023/01/Picture1-min.jpg"
                                        alt="Orderlina commission-free delivery benefits"
                                    />
                                </figure>
                                <p>Apps like Yelp and Tripadvisor receive massive footfall on their websites. Customers who are looking for new restaurants, new dishes, new twists on familiar dishes, fusion delicacies, and new cuisine experience frequent these websites. You can siphon off those customers to your restaurant by ensuring that your restaurant shows up on these food/restaurant discovery apps.</p>

                                <p>When you advertise these apps on your business premises or website and encourage your consumers to leave reviews on these apps, you are pumping up the online presence of your business. OpenTable and Yelp Ads integrate into most POS systems, making it easy for you to fuel online reviews and web traffic.</p>


                                <h2 class="wp-block-heading">Click & Order</h2>
                                <p>When people could not visit restaurants during the pandemic, online ordering introduced a semblance of normalcy into their lives. You cannot afford to ignore online orders in an increasingly digital world. It provides next-level convenience to your customers.</p>
                                <p>Online ordering apps have become almost an essential POS integration today. POS integrations like Orderlina allow patrons to scan QR codes for ordering and making payments. In fact, Orderlina has carved a place for itself among the most popular POS integrations in the market.</p>
                                <p>Orderlina offers all kinds of menus, from view-only to like-only to completely interactive. It supports drive-ins, takeaways, curbside ordering, and home-delivery orders. For all these features, there is no commission to be paid, only a fixed monthly software fee. Restaurants can use a custom domain, branding, and menu setup. The Orderlina POS integration allows restaurants to manage their business, present their menus, and deliver their food in ways that best fit their business.</p>


                                <h2 class="wp-block-heading">Reserving Tables</h2>
                                <p>Long lines around the block are a dream of every ambitious restauranteur. However, they are also a sign of something more problematic: that you either need capacity expansion or better management of your reservations. For restaurants that keep busy, the right POS integration can help them manage their tables and reservations more efficiently.</p>
                                <p>Table management apps will allow customers to reserve, edit, and cancel tables at your restaurant. The best part is that none of it requires your staff’s intervention. They also help keep the kitchens working smoothly, manage orders efficiently, and enhance guest satisfaction.</p>
                                <h2 class="wp-block-heading">Incentivizing Regulars
                                </h2>
                                <p>Integrate a loyalty app into your restaurant POS system. As your loyal customers accrue points and receive attractive discounts, they will eat more at your restaurant. Add to it the app-centered lifestyles of most youngsters, and you’ve got yourself a winning tech combo. Youngsters are always looking for a good deal, and you can incentivize them to be loyal and repeat customers. As they say, “Catch ‘em young!”</p>
                                <p>You can also customize the app to push your lesser-known items. As your inventory keeps moving, your business will become more profitable. All because of the well-timed promotions run by your loyalty app integration.</p>

                                <p>You can also customize the app to push your lesser-known items. As your inventory keeps moving, your business will become more profitable. All because of the well-timed promotions run by your loyalty app integration.</p>

                                <h2 class="wp-block-heading">Manage Your Staff Better
                                </h2>
                                <div className={styles['wp-block-image']}>
                                    <figure className="aligncenter size-large">
                                        <img className={styles['block-img']}
                                            src="https://orderlina.com/wp-content/uploads/2022/10/POS_Image-4-1024x654.jpg"
                                            alt="multi channel marketing"
                                        />
                                    </figure>
                                </div>

                                <p>Employee-facing POS integrations can help your restaurant prevent potential problems with scheduling, payroll management, employee benefits, and more. The restaurant industry provides a lot of entry-level jobs to freshers. So, it suffers from a high degree of attrition. When you integrate your POS with staff management software, you are freeing up your time and mind from a lot of stress. There are many staff scheduling POS integrations like 7shifts that can help you stay ahead of the attrition rate and keep your business running as usual.</p>


                                <h2 class="wp-block-heading">Keep the Inventory Moving</h2>
                                <p>Restaurants deal with a lot of fresh inventory that must be moved continuously. Even a little wastage of food routinely can lead to huge losses annually. Bad service that forces you to frequently comp food and drinks is a money sink too. You can integrate an add-on to your POS to help you keep track of inventory and reduce free comps.

                                </p>
                                <p>When you can keep tabs on operations, you will be better placed to edit the menu, make changes to service staff, train them better, or take other crucial steps. This will boost your employee morale as guests stay happy, ultimately making your restaurant more profitable.</p>


                                <h2 class="wp-block-heading">How to Choose the Integrations Ideal for Your Restaurant POS System?</h2>
                                <p>You can realize your business’s true potential by adding POS integrations that align with your business expansion goals. A good place to start expanding your POS capabilities would be to analyze your unique needs. Use customer feedback, staff members’ experience, and your observations from managing the business to identify what other capabilities would help your business grow. Then, you can choose the right POS integration for your restaurant.</p>
                                <p>You can add any number of integrations to your existing POS system. Talk to your POS service provider to understand the integrations better.</p>

                                <h2 class="wp-block-heading">What’s Great About POS Integrations?
                                </h2>
                                <p>Every integration for your restaurant POS system should automate a tedious manual task and provide accurate data on how to improve your services. When these different integrations share data with your POS, you empower your employees to make your customers happier and your business more competitive. Just ensure that you research the multiple integrations available in the market first. This will allow you to ensure that all software solutions work in unison to make your business successful.</p>

                                <footer className="entry-footer">
                                    <div className={styles['entry-tags']}>
                                        <span className={styles['tags-links']}>
                                        
                                            <a href="https://orderlina.com/tag/best-restaurant-pos-system/" title="best restaurant POS system" className={styles['tags-link']} rel="tag">
                                                <span className="tag-hash">#</span>best restaurant POS system</a>
                                            <a href="https://orderlina.com/tag/restaurant-management-system/" title="restaurant management system" className={styles['tags-link']} rel="tag">
                                                <span className="tag-hash">#</span>restaurant management system</a>
                                            <a href="https://orderlina.com/tag/restaurant-pos-systems/" title="restaurant POS systems" className={styles['tags-link']} rel="tag">
                                                <span className="tag-hash">#</span>restaurant POS systems</a>
                                        </span>
                                    </div>
                                </footer>


                            </div>

                        </div>

                    </article>
                    </div>

                    <nav className={styles['post-navigations']} aria-label="Posts">
                        <div className={styles['nav-links']}>
                            <div className={styles['nav-previous']}>
                                <a href="https://orderlina.com/next-step-in-restaurant-takeaway-delivery-fast-food-virtual-restaurants-are-the-latest-trend-for-2023/" rel="prev">
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
                                    A Quick Hotel Management Software Buying Guide
                                </a>
                            </div>
                            <div className={styles['nav-next']}>
                                <a href="https://orderlina.com/qr-code-menus-a-step-by-step-guide-for-your-restaurant/" rel="next">
                                    <div className={styles['post-navigation-sub']}>
                                        <small>
                                            Next
                                            <span className="kadence-svg-iconset svg-baseline">
                                                <svg
                                                    aria-hidden="true"
                                                    className="kadence-svg-icon kadence-arrow-right-alt-svg"
                                                    fill="currentColor"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="27"
                                                    height="28"
                                                    viewBox="0 0 27 28"
                                                >
                                                    <title>Continue</title>
                                                    <path d="M27 13.953c0 0.141-0.063 0.281-0.156 0.375l-6 5.531c-0.156 0.141-0.359 0.172-0.547 0.094-0.172-0.078-0.297-0.25-0.297-0.453v-3.5h-19.5c-0.281 0-0.5-0.219-0.5-0.5v-3c0-0.281 0.219-0.5 0.5-0.5h19.5v-3.5c0-0.203 0.109-0.375 0.297-0.453s0.391-0.047 0.547 0.078l6 5.469c0.094 0.094 0.156 0.219 0.156 0.359v0z"></path>
                                                </svg>
                                            </span>
                                        </small>
                                    </div>
                                    Next Step in Restaurant Takeaway & Delivery, Fast Food Virtual Restaurants Are the Latest Trend for 2023
                                </a>
                            </div>
                        </div>
                    </nav>
                    <h2 className={styles['my-posts']}>Similar Posts</h2>
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
                                <a className={styles['slide-p-vcards']}href="https://orderlina.com/author/dartwriter101gmail-com/">Suraj</a></span></span>
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
                                <a className={styles['slide-p-vcards']}href="https://orderlina.com/author/rohan/">rohan</a></span></span>
                                <span className={styles['slide-p-on']}>
                                <time className="entry-date published" datetime="2019-09-10T07:53:42-04:00">September 10, 2019</time></span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles['my-swipers']}>
                            <h3 className={styles['slide-title']}><a className={styles['slide-h']}href="https://orderlina.com/a-qr-menu-for-restaurants-is-contactless-not-hospitality-less/" rel="bookmark">Do QR Codes in Restaurants Make the Menu Contactless, But The Service “Hospitality-Less?”</a></h3>
                        <div className={styles['slide-p']}>
                                <span className={styles['slide-posted']}>
                                <span className={styles['slide-p-label']}>By</span>
                                <span className={styles['slide-p-vcard']}>
                                <a className={styles['slide-p-vcards']}href="https://orderlina.com/author/rohan/">rohan</a></span></span>
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
                                <a className={styles['slide-p-vcards']}href="https://orderlina.com/author/rohan/">Suraj</a></span></span>
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
                                <a className={styles['slide-p-vcards']}href="https://orderlina.com/author/rohan/">rohan</a></span></span>
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
                                <a className={styles['slide-p-vcards']}href="https://orderlina.com/author/rohan/">rohan</a></span></span>
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
