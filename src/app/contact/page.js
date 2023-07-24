import styles from '../styles/contact.module.css';

const  RestaurantImage=()=> {
  return (
    <>
     <form className={`container ${styles.contactbottom} `}>
      <h1  className={` ${styles.texthding } `}>Contact Us </h1>
      <p className={` ${styles.contactpara } `}>Please enter your details below and we’ll be in touch shortly</p>
      <div className={` ${styles.contactcenter} `}>
      <div className={`name block ${styles.contactgride} `}>
    
    <label className={` ${styles.contactname} `} htmlFor="frm-first">Name</label>
    <input className={` ${styles.taxtpara } `} 
      id="frm-first"
      type="text"
      name="first"
      autoComplete="given-name"
      required
  />
      </div>
      
     
      <div className={`email block ${styles.contactgride} `}>
      <label className={` ${styles.contactname} `}  htmlFor="frm-email">Email*
</label>
        <input className={` ${styles.taxtpara } `} 
          id="frm-email"
          type="email"
          name="email"
          autoComplete="email"
          required
        />
      </div>
     
      <div className={`massage block ${styles.contactgrides} `}>
        <label className={` ${styles.contactname} `} htmlFor="frm-message">Message*</label>
        <textarea id="frm-message" rows="6" name="message"></textarea>
      </div>
     
      <div className={`button block `}>
        <button className={ `${styles.submitbtn} `} type="submit">Submit</button>
      </div>
      </div>
    </form>
    </>
   
  );
}

export default RestaurantImage;