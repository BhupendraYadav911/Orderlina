import Image from 'next/image';
import styles from "../styles/middle.module.css";


const MyComponent = () => {
  return (
    <div className={`row ${styles.outerContainer}`}>
      <div className="col-md-6">
        <div className={` ${styles.innerColumn}`}>
          <h3 className="">Flyers</h3>
          <p></p>
          <p>Pick one that matches your brand from our range of included templates</p>
          <div className="d-flex justify-content-center">
            <a className={`btn btn-primary ${styles.btnPrimary}`} href="https://orderlina.menu/marcelas" target="_blank" rel="noreferrer noopener">Scan QR Code Or Click</a>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className={` ${styles.borderRadius24} `}>
          <img
            src="https://orderlina.com/wp-content/uploads/2020/11/Marcelas-QR-FLYER.jpg"
            alt=""
            width={397}
            height={560}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
