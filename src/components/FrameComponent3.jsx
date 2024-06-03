import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <header className={[styles.appLandingPageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.tmWrapper}>
              <b className={styles.tm}>TM</b>
            </div>
            <nav className={styles.homeParent}>
              <a className={styles.home}>home</a>
              <a className={styles.aboutUs}>about us</a>
              <a className={styles.pricing}>pricing</a>
              <a className={styles.features}>features</a>
            </nav>
          </div>
        </div>
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <a className={styles.download}>download</a>
        </button>
      </div>
    </header>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
