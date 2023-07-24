import styles from "@/app/styles/navbar.module.css"
import Link from "next/link";
import Nav from "@/app/components/Nav";
import logo from "../../../public/Images/logo.png"
import Image from "next/image";


const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link className={styles.headerName} href="/">
                    <Image src={logo} alt="my-logo-image" className={` ${styles.LogoImages}`}/>
            <h1 >Orderlina</h1> 
                </Link>
            </div>
            <Nav/>
        </header>
    );
};

export default Header;
