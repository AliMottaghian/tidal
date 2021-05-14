import PropTypes from "prop-types";
import { Carousel } from "antd";
import Title from "../ui/title/Title";
import classes from "./horizontalScroll.module.css";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        arrows: false,
        draggable: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
      },
    },
  ],
};

const HorizontalScroll = ({ data, toggleDetails, selectedAlbum }) => {
  return (
    <div>
      <Title text="ALBUMS" className="cyanColor" />
      <Carousel {...settings}>
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className={`${classes.listItem} ${
                selectedAlbum === item.id ? classes.selected : ""
              }`}
            >
              <figure onClick={() => toggleDetails(item.id)}>
                <img src={item.cover_medium} alt={item.title} />
                <p className="textCenter">{item.title}</p>
              </figure>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

HorizontalScroll.propTypes = {
  data: PropTypes.array,
  toggleDetails: PropTypes.func,
  selectedAlbum: PropTypes.number,
};

export default HorizontalScroll;
