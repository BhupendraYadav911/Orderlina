'use client'
import styles from "@/app/styles/navbar.module.css"
import {CgCloseR, CgMenu} from "react-icons/cg";
import Link from "next/link";
import {useState} from "react";

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);
    console.log("value " + openMenu)
    return (
        <>
            <nav className={styles.navbar}>
                <div className={openMenu ? `${styles.active}` : "" }>
                    <ul className={styles.navbarList}>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink} href="/"
                                  onClick={() => setOpenMenu(false)}
                            >Login</Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink} href="/pricing"
                                  onClick={() => setOpenMenu(false)}
                            >Pricing</Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink}
                                  onClick={() => setOpenMenu(false)}
                                  href="#">View Demo</Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink}
                                  onClick={() => setOpenMenu(false)}
                                  href="#">Book Demo</Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink}
                                  onClick={() => setOpenMenu(false)}
                                  href="#">Sign Up</Link>
                        </li>
                    </ul>

                    {/* //nav icon */}
                    <div className={styles['mobile-navbar-btn']}>
                        <CgMenu
                            name="menu-outline"
                            className={styles['mobile-nav-icon']}
                            onClick={() => setOpenMenu(true)}
                        />
                        <CgCloseR
                            name="close-outline"
                            className={`${styles['mobile-nav-icon']} ${styles['close-outline']}`}
                            onClick={() => setOpenMenu(false)}
                        />
                    </div>
                </div>
            </nav>

        </>

    );
};

export default Nav;