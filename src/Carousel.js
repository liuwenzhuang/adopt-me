import React from "react";
import ThemeContext from "./ThemeContext";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };

  static getDerivedStateFromProps(props) {
    let photos = ["http://placecorgi.com/600/600"];

    const media = props.media;
    if (media && media.length) {
      photos = media.map((item) => item.large);
    }

    return { photos };
  }

  onPhotoClick = (e, index) => {
    e.preventDefault();
    const { active } = this.state;
    if (active === index) {
      return;
    }
    this.setState({
      active: index,
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <ThemeContext.Consumer>
        {([theme]) => (
          <div className="carousel" style={{ background: theme }}>
            <img src={photos[active]} alt="animal" />
            <div className="carousel-smaller">
              {photos.map((photo, index) => {
                return (
                  // eslint-disable-next-line
                  <img
                    key={photo + index}
                    src={photo}
                    className={index === active ? "active" : ""}
                    alt="animal thumbnail"
                    onClick={(e) => this.onPhotoClick(e, index)}
                  />
                );
              })}
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Carousel;
