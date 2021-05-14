import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchAlbums, getAlbumById } from "../../store/api/albums/action";
import SearchBar from "../../components/searchBar/SearchBar";
import Title from "../../components/ui/title/Title";
import HorizontalScroll from "../../components/horizontalScroll/HorizontalScroll";
import AlbumDetails from "../../components/albumDetails/AlbumDetails";

import classes from "./home.module.css";

const Home = () => {
  const [searchedTitle, setSearchedTitle] = useState(null); //The value that user searched on the search bar
  const [showAlbumDetails, setShowAlbumDetails] = useState(false); //A boolean to Hide and Show the details of the albums
  const [selectedAlbum, setSelectedAlbum] = useState(0); //A number type state to hold the ID of each selected album

  const dispatch = useDispatch();

  const albums = useSelector((state) => state.albums.albums); //The Albums list of the searched Artist (Fetched from API)
  const album = useSelector((state) => state.albums.album); //The full information of a selected album (Fetched from API)

  useEffect(() => {
    dispatch(searchAlbums(860)); // Showing the Pink Floyd albums as suggestions to prevent loading an empty page
  }, [dispatch]);

  const selectArtist = (obj) => {
    dispatch(searchAlbums(obj.id)); //Fetching the albums of a selected artist
    setSearchedTitle(obj.name); //Storing the searched title to print it for the user
    if (showAlbumDetails) {
      setShowAlbumDetails(false); //If the detail panel was open, we have to close it to hide the old details
    }
  };

  const toggleDetails = (id) => {
    if (id !== selectedAlbum) {
      if (!showAlbumDetails) {
        setShowAlbumDetails(true);
      }
      setSelectedAlbum(id);
      dispatch(getAlbumById(id)); //Fetching the details of an album
    } else {
      //If selected ID is equal to the details ID, we should hide the panel
      setShowAlbumDetails((prevState) => {
        return !prevState;
      });
      setSelectedAlbum(0);
    }
  };

  return (
    <div className={classes.home}>
      <section>
        <SearchBar selectArtist={selectArtist} />
      </section>
      {albums && (
        <section>
          <Title
            text={
              searchedTitle
                ? `Search results for "${searchedTitle}"`
                : "Suggestions"
            }
          />
          {/* <Horizontal menu section. the list of the albums> */}
          {albums?.data && (
            <Fragment>
              <HorizontalScroll
                data={albums.data.data}
                toggleDetails={toggleDetails}
                selectedAlbum={selectedAlbum}
              />
              {!albums.data.data?.length && (
                <h3 className="textCenter">No Result</h3>
              )}
            </Fragment>
          )}
          {/* </ End of the Horizontal menu section. the list of the albums> */}
        </section>
      )}
      {/* <Album detail panel section> */}
      {showAlbumDetails && (
        <section>
          <AlbumDetails album={album} />
        </section>
      )}
      {/* </ End of the Album detail panel section> */}
    </div>
  );
};

export default Home;
