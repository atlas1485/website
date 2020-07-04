import React, { Component } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images';

import Img from 'gatsby-image';
import imageStyles from './Image.module.scss'
import LogoGallery from '../../../content/svg/gallery.svg';

const customModalStyles = {
  dialog: base => ({
    ...base,
    width: 'auto',
  })
}
const customCarouselStyles = {
  footer: base => ({
    ...base,
    background: 'none !important',
    color: '#666',
    padding: 0,
    paddingTop: 20,
    position: 'static',

    '& a': {
      color: 'black',
    },
  }),
  footerCount: base => ({
    ...base,
    fontSize: '20px',
    color: '#dadada',
  }),
  navigation: base =>({
    ...base,
  }),
  header: base => ({
    ...base,
    background: 'none !important',
    padding: 0,
    paddingBottom: 10,
    position: 'static',
  }),
  headerClose: base => ({
    ...base,
    color: '#dadada',
  }),
  view: base => ({
    ...base,
    width: 'auto',
    overflow: 'hidden',
    '@media (min-width:600px)': {
      height: "65vh",
    }
  }),
}
class Image extends Component{
  state = {
    selectedIndex: 0,
    lightboxIsOpen: false,
  };
  toggleLightbox = (selectedIndex) => {
    this.setState(state => ({
      lightboxIsOpen: !state.lightboxIsOpen,
      selectedIndex,
    }));
  };
  render(){
  const images = this.props.images.reduce(
            (imagesArray, images) =>{
              let someNewValue = { src: images.fluid.src }
              imagesArray.push(someNewValue)
              return imagesArray
            }
          , [])
    return (
      <>
        <div
          className={imageStyles.imageContainer}
          data-sal="slide-up"
          data-sal-duration="2000"
          data-sal-delay={this.props.num%2===0?"200":"000"} 
          data-sal-easing="ease-out-circ" 
          onClick={() => this.toggleLightbox(0)}
        >
          <Img 
            className={`
              ${imageStyles.Image}
            `} 
            fluid={this.props.images[this.props.images.length-1].fluid}
          />
          { this.props.galleryIcon &&
              <LogoGallery
                className={imageStyles.galleryIcon}
              />
          }
        </div>
        <ModalGateway>
          {this.state.lightboxIsOpen ? (
            <Modal 
              onClose={this.toggleLightbox}
              allowFullscreen={false}
              styles={customModalStyles}
            >
              <Carousel
                currentIndex={this.state.selectedIndex}
                views={images}
                styles={customCarouselStyles}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </>
    )
  }
}

export default Image