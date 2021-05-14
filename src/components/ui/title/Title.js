import PropTypes from "prop-types";
import classes from "./title.module.css";

const Title = ({ text, className }) => {
  return (
    <h3 className={`${classes.title} ${className ? [className] : ""}`}>
      {text}
    </h3>
  );
};
Title.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Title;
