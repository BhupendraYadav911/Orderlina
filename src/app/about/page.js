import styles from "../styles/about.module.css";

const page = () => {
  return (
    <>
      <div className={styles["content-area"]}>
        <div className={styles["content-container"]}>
          <div className={styles["content-wrap"]}>
            <article className={styles["article"]}>
              <div className={styles["entry-content-wrap"]}>
                <div className={styles["wp-block-image"]}>
                  <img
                    className={styles["block-img"]}
                    src="https://orderlina.com/wp-content/uploads/2023/01/quarantine-home-beer-party-with-fast-food-delivere-2021-08-30-17-02-06-utc-min.jpg"
                    alt="restaurant brand vision mission core values"
                  />
                </div>
                <header className="entry-header post-title title-align-inherit title-tablet-align-inherit title-mobile-align-inherit">
                  <h1 className={styles["entry-title"]}>
                    Orderlina’s mission is to enhance the dining experience
                    through technology
                  </h1>
                  <p>
                    Orderlina is a Technology company that builds ordering
                    infrastructure for the hospitality industry. Businesses of
                    every size from owner operators to multinational franchises
                    use our software to streamline operations and enhance the
                    customer experience.
                  </p>
                  <h1 className={styles["entry-title"]}>
                    MELBOURNE – SINGAPORE – PHUKET
                  </h1>
                  <div className={styles["wp-block-image"]}>
                    <img
                      className={styles["block-img"]}
                      src="https://orderlina.com/wp-content/uploads/2020/08/qr-code-restaurant-lady.png"
                      alt="restaurant brand vision mission core values"
                    />
                  </div>
                  <h1 className={styles["entry-title"]}>FUTURE</h1>
                  <p>
                    As the world adapted to the changes introduced by the
                    pandemic, Orderlina similarly shifted its operational focus
                    from Kiosk and Tablet technologies to BYOD software
                    solutions to assist the food and beverage industry navigate
                    the new environment.
                  </p>
                </header>
              </div>
              <div  className={`section ${styles.formSection} `}>

              <form className={`container ${styles.contactbottom} `}>
                <h1 className={` ${styles.texthding} `}>Contact Us </h1>
                <p className={` ${styles.contactpara} `}>
                  Please enter your details below and we’ll be in touch shortly
                </p>
                <div className={` ${styles.contactcenter} `}>
                  <div className={`name block ${styles.contactgride} `}>
                    <label
                      className={` ${styles.contactname} `}
                      htmlFor="frm-first"
                    >
                      Name
                    </label>
                    <input
                      className={` ${styles.taxtpara} `}
                      id="frm-first"
                      type="text"
                      name="first"
                      autoComplete="given-name"
                      required
                    />
                  </div>

                  <div className={`email block ${styles.contactgride} `}>
                    <label
                      className={` ${styles.contactname} `}
                      htmlFor="frm-email"
                    >
                      Email*
                    </label>
                    <input
                      className={` ${styles.taxtpara} `}
                      id="frm-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className={`massage block ${styles.contactgrides} `}>
                    <label
                      className={` ${styles.contactname} `}
                      htmlFor="frm-message"
                    >
                      Message*
                    </label>
                    <textarea
                      id="frm-message"
                      rows="6"
                      name="message"
                    ></textarea>
                  </div>

                  <div className={`button block `}>
                    <button className={`${styles.submitbtn} `} type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
