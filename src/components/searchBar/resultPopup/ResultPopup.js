import PropTypes from "prop-types";
import { Spin } from "antd";
import InfiniteScroll from "../../ui/infiniteScroll/InfiniteScroll";
import classes from "./resultPopup.module.css";

const ResultPopup = ({
  closePopup,
  result,
  selectArtist,
  loading,
  loadMore,
}) => {
  return (
    <div className={classes.popup}>
      <div className="textRight">
        <span onClick={closePopup} className={classes.close}>
          X
        </span>
      </div>
      {loading && (
        <div className="textCenter">
          <Spin />
        </div>
      )}
      <InfiniteScroll onReachEnd={loadMore}>
        {/* InfiniteScroll will handle fetching the rest items of the list */}
        <div className={classes.result}>
          {result?.map((item) => {
            return (
              <figure
                key={item.id}
                onClick={() => selectArtist({ id: item.id, name: item.name })}
              >
                <img src={item.picture_medium} alt={item.name} />
                <p className="textCenter">{item.name}</p>
              </figure>
            );
          })}
        </div>
      </InfiniteScroll>

      {!loading && !result?.length && (
        <h3 className="textCenter"> No Result</h3>
      )}
    </div>
  );
};

ResultPopup.propTypes = {
  closePopup: PropTypes.func,
  selectArtist: PropTypes.func,
  loading: PropTypes.bool,
  result: PropTypes.array,
  loadMore: PropTypes.func,
};

export default ResultPopup;
