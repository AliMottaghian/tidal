import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, message } from "antd";
import PropTypes from "prop-types";
import { searchArtists } from "../../store/api/search/action";

import ResultBox from "./resultBox/ResultBox";
import ResultPopup from "./resultPopup/ResultPopup";
import SearchInput from "./searchInput/SearchInput";

const SearchBar = ({ selectArtist }) => {
  let searchTimeout = null;
  const dispatch = useDispatch();
  const inputEl = useRef(null);
  const searchRef = useRef(null);

  const [resultState, setResultState] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const { status: searchStatus, data: searchResult } =
    useSelector((state) => state.search.result) || {}; // Renaiming the status to searchStatus and data to searchResult
  const loading = useSelector((state) => state.search.loading);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If user clicked outside of the search area we should hide the autocomplete panel
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        if (resultState.length) {
          setResultState([]);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef, resultState]);

  useEffect(() => {
    if (searchResult && searchStatus) {
      if (searchStatus >= 200 && searchStatus < 400) {
        if (searchResult.prev) {
          // If "prev" key is exist means we are in the next page of the data and we should append the new value to the old value
          return setResultState((prevState) => {
            return [...prevState, ...searchResult.data];
          });
        }
        setResultState(searchResult.data);
      }
    }
  }, [searchStatus, searchResult]);

  const onSearchChange = (v) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      // This settimeout will prevent extra service calls for each typing. We will wait 200 ms to user stop typing then we should fetch the data.
      const value = v.target.value;
      if (!value) {
        return setResultState([]);
      }
      dispatch(searchArtists(value));
    }, 200);
  };
  const searchBtn = () => {
    const value = inputEl.current.state.value;
    if (value) {
      dispatch(searchArtists(value));
      setShowPopup(true);
    } else {
      message.error("Please type somthing!");
    }
  };
  const closePopup = () => {
    setResultState([]);
    setShowPopup(false);
  };
  const loadMore = () => {
    // To load more the next items of the response we can call the "next" url in the response object
    if (!loading && searchResult?.next) {
      let nextUrl = new URL(searchResult.next);
      nextUrl = nextUrl.pathname + nextUrl.search;
      dispatch(searchArtists(null, nextUrl));
    }
  };
  return (
    <div ref={searchRef}>
      <SearchInput
        onSearchChange={onSearchChange}
        searchBtn={searchBtn}
        inputEl={inputEl}
      />
      {resultState.length && !showPopup ? (
        <Row>
          <Col md={20} xs={17}>
            <ResultBox
              data={resultState}
              selectArtist={(obj) => {
                selectArtist(obj);
                setResultState([]);
              }}
              loadMore={loadMore}
            />
          </Col>
        </Row>
      ) : null}
      {showPopup && (
        <ResultPopup
          closePopup={closePopup}
          result={resultState}
          selectArtist={(obj) => {
            selectArtist(obj);
            setResultState([]);
            closePopup();
          }}
          loading={loading}
          loadMore={loadMore}
        />
      )}
    </div>
  );
};

SearchBar.propTypes = {
  selectArtist: PropTypes.func,
};

export default SearchBar;
