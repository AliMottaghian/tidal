import PropTypes from "prop-types";
import classes from './infiniteScroll.module.css'

const InfiniteScroll = ({ children, onReachEnd }) => {
  const onScroll = ({ target }) => {
    if (target.scrollTop === target.scrollHeight - target.offsetHeight) { // Check to see if user reached at the end of the list
      if (onReachEnd) {
        onReachEnd();
      }
    }
  };
  return (
    <div onScroll={onScroll} className={classes.infiniteScroll}>
      {children}
    </div>
  );
};

InfiniteScroll.propTypes = {
  children: PropTypes.node,
  onReachEnd: PropTypes.func,
};
export default InfiniteScroll;
