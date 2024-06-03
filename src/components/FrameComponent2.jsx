import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div
      className={[styles.makeTheBestFinancialDecisiParent, className].join(" ")}
    >
      <h1 className={styles.makeTheBest}>make the best financial decisions</h1>
      <p className={styles.cumEtConvallis}>
        Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
        faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
      </p>
      <div className={styles.frameParent}>
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.getStarted}>get started</div>
          <div className={styles.vectorWrapper}>
            <img className={styles.frameItem} alt="" src="/vector-1.svg" />
          </div>
        </button>
        <div className={styles.watchVideoWrapper}>
          <div className={styles.watchVideo}>watch video</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
