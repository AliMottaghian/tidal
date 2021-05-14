import PropTypes from "prop-types";
import Table from "./table/Table";
import { Spin } from "antd";

import classes from "./albumDetails.module.css";

const Album = ({ album }) => {
  if (!album)
    return (
      <div className={`${classes.spinner} textCenter`}>
        <Spin />
      </div>
    );
  return (
    <div className={classes.container}>
      <div className={classes.albumInfo}>
        <img
          className={classes.coverImage}
          alt={album.data.title}
          src={album.data.cover_medium}
        />
        <h2 className={`${classes.title} cyanColor`}>{album.data.title}</h2>
      </div>

      <Table
        tracks={album.data.tracks.data}
        releaseDate={album.data.release_date.split("-")[0]}
      />
    </div>
  );
};

Album.propTypes = {
  album: PropTypes.object,
};

export default Album;
