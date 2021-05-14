import PropTypes from "prop-types";
import { timeFormat } from "../../../utils/index";
import classes from "./table.module.css";

const Table = ({ tracks, releaseDate }) => {
  const renderTrackList = () => {
    return tracks.map((track, index) => {
      return (
        <tr key={index}>
          <td></td>
          <td>{index + 1}</td>
          <td>{track.title}</td>
          <td>{track.artist.name}</td>
          <td>{timeFormat(+track.duration)}</td>
          <td>{releaseDate}</td>
        </tr>
      );
    });
  };

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th className={classes.emptyHeader}></th>
          <th>#</th>
          <th width="30%">Title</th>
          <th>Artist</th>
          <th>Time</th>
          <th>Released</th>
        </tr>
      </thead>
      <tbody>{renderTrackList()}</tbody>
    </table>
  );
};

Table.propTypes = {
  tracks: PropTypes.array,
  releaseDate: PropTypes.string,
};
export default Table;
