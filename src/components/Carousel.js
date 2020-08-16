import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ImageWithZoom,
  DotGroup,
} from "pure-react-carousel";

export default class Carousel extends Component {
  static propTypes = {
    folder: PropTypes.string.isRequired,
    captions: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={60}
        totalSlides={this.props.captions.length}
        infinite
      >
        <div style={{ position: "relative" }}>
          <Slider style={{ borderRadius: "3vmin" }}>
            {this.props.captions.map(
              (caption, ind) => (
                <Slide index={ind}>
                  <ImageWithZoom src={`${this.props.folder}/${ind + 1}.png`} />
                  {caption != null && caption.trim().length > 0 && (
                    <div className="caption">{caption}</div>
                  )}
                </Slide>
              ),
              this
            )}
            {/* <Slide index={0}>
              <ImageWithZoom src={this.props.folder + "/1.png"} />
              <div className="caption">Main Render</div>
            </Slide>
            <Slide index={1}>
              <ImageWithZoom src={this.props.folder + "/2.png"} />
              <div className="caption">Front</div>
            </Slide>
            <Slide index={2}>
              <ImageWithZoom src={this.props.folder + "/3.png"} />
              <div className="caption">Back</div>
            </Slide>
            <Slide index={3}>
              <ImageWithZoom src={this.props.folder + "/4.png"} />
              <div className="caption">Window Open</div>
            </Slide> */}
          </Slider>
          <ButtonBack className="buttonBack buttonCarousel">
            <img src="../../assets/arrow_left.svg" />
          </ButtonBack>
          <ButtonNext className="buttonNext buttonCarousel">
            <img src="../../assets/arrow_right.svg" />
          </ButtonNext>
        </div>
        <DotGroup className="dotGroup" />
      </CarouselProvider>
    );
  }
}
