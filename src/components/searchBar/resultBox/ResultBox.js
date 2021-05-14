import PropTypes from "prop-types";
import InfiniteScroll from "../../ui/infiniteScroll/InfiniteScroll";
import classes from "./resultBox.module.css";

const ResultBox = ({ data, selectArtist, loadMore }) => {
  return (
    <div className={classes.resultBox}>
      <p>Search results</p>
      {data.length ? (
        <InfiniteScroll onReachEnd={loadMore}>
          {/* InfiniteScroll will handle fetching the rest items of the list */}
          <ul>
            {data.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() => selectArtist({ id: item.id, name: item.name })}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </InfiniteScroll>
      ) : (
        <p className="textCenter">No result</p>
      )}
    </div>
  );
};

ResultBox.propTypes = {
  data: PropTypes.array,
  selectArtist: PropTypes.func,
  loadMore: PropTypes.func,
};

export default ResultBox;
