import PropTypes from "prop-types";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({ className = "" }) => {
  return (
    <div className={[styles.adderParent, className].join(" ")}>
      <div className={styles.adder} />
      <div className={styles.adder1} />
      <div className={styles.vectorParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/rectangle-5.svg"
        />
        <img
          className={styles.decoderIcon}
          loading="lazy"
          alt=""
          src="/star-7-1.svg"
        />
        <img className={styles.frameItem} alt="" src="/rectangle-3.svg" />
        <p className={styles.makeTheBest}>make the best financial decisions</p>
        <b className={styles.uifryPremium}>Uifry Premium</b>
        <a className={styles.freeTrial}>free trial</a>
      </div>
      <div className={styles.executionUnit} />
      <img className={styles.frameInner} alt="" src="/group-35920@2x.png" />
      <img
        className={styles.memoryMapIcon}
        loading="lazy"
        alt=""
        src="/star-8.svg"
      />
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
