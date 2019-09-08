import React from 'react';
import classnames from 'classnames';

import rexall1 from '../../assets/gallery_images/commercial/rexall/thumbnails/rexall1.jpg';
import rexall2 from '../../assets/gallery_images/commercial/rexall/thumbnails/rexall2.jpg';
import rexall3 from '../../assets/gallery_images/commercial/rexall/thumbnails/rexall3.jpg';
import rexall4 from '../../assets/gallery_images/commercial/rexall/thumbnails/rexall4.jpg';
import rexall5 from '../../assets/gallery_images/commercial/rexall/thumbnails/rexall5.jpg';
import rexall6 from '../../assets/gallery_images/commercial/rexall/thumbnails/rexall6.jpg';
import rexall7 from '../../assets/gallery_images/commercial/rexall/thumbnails/rexall7.jpg';
import rexall8 from '../../assets/gallery_images/commercial/rexall/thumbnails/rexall8.jpg';


import res1 from '../../assets/gallery_images/residential/thumbnails/res1.jpg';
import res2 from '../../assets/gallery_images/residential/thumbnails/res2.jpg';
import res3 from '../../assets/gallery_images/residential/thumbnails/res3.jpg';
import res4 from '../../assets/gallery_images/residential/thumbnails/res4.jpg';
import res5 from '../../assets/gallery_images/residential/thumbnails/res5.jpg';
import res6 from '../../assets/gallery_images/residential/thumbnails/res6.jpg';
import res7 from '../../assets/gallery_images/residential/thumbnails/res7.jpg';
import res8 from '../../assets/gallery_images/residential/thumbnails/res8.jpg';
import res9 from '../../assets/gallery_images/residential/thumbnails/res9.jpg';
import res10 from '../../assets/gallery_images/residential/thumbnails/res10.jpg';
import res11 from '../../assets/gallery_images/residential/thumbnails/res11.jpg';
import res12 from '../../assets/gallery_images/residential/thumbnails/res12.jpg';
import res13 from '../../assets/gallery_images/residential/thumbnails/res13.jpg';
import res14 from '../../assets/gallery_images/residential/thumbnails/res14.jpg';

import want1 from '../../assets/gallery_images/commercial/want/thumbnails/want1.jpg';
import want2 from '../../assets/gallery_images/commercial/want/thumbnails/want2.jpg';
import want3 from '../../assets/gallery_images/commercial/want/thumbnails/want3.jpg';

import riocan1 from '../../assets/gallery_images/commercial/riocan/thumbnails/riocan1.jpg';
import riocan2 from '../../assets/gallery_images/commercial/riocan/thumbnails/riocan2.jpg';
import riocan3 from '../../assets/gallery_images/commercial/riocan/thumbnails/riocan3.jpg';

import tacit1 from '../../assets/gallery_images/commercial/tacit/thumbnails/tacit1.jpg';
import tacit2 from '../../assets/gallery_images/commercial/tacit/thumbnails/tacit2.jpg';
import tacit3 from '../../assets/gallery_images/commercial/tacit/thumbnails/tacit3.jpg';

import PageHeading from '../../components/Headings/PageHeading';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import './Gallery.css'

const commercialImages = [
  rexall1, rexall2, rexall3, rexall4, rexall5, rexall6, rexall7, rexall8,
  want1, want2, want3,
  riocan1, riocan2, riocan3,
  tacit1, tacit2, tacit3
]

const residentialImages = [
  res1, res2, res3, res4, res5, res6, res7, res8, res9, res10, res11, res12, res13, res14
]

class Gallery extends React.Component {
  state = {
    activeGallery: 0,
  }

  getActiveGallery = galleryNumber => {
    return classnames("gallery__category-item", {"active-gallery": this.state.activeGallery === galleryNumber })
  }

  render() {
    return (
      <div className="gallery__page">
        <div className="gallery__page--content">
          <PageHeading heading="" />
          <div className="gallery__categories">
              <button className={this.getActiveGallery(0)} onClick={() => this.setState({ activeGallery: 0 })}> Commercial </button>
              <button className={this.getActiveGallery(1)} onClick={() => this.setState({ activeGallery: 1 })}> Residential </button>
          </div>
          { this.state.activeGallery === 0 &&
          <Row>
            {commercialImages.map(img => (
              <Col xs={12} sm={6} md={4} lg={3} className="margin-top-20" key={img}> <img className="gallery-img" src={img} alt="construction of rexall building" /> </Col>
            ))}
          </Row>
          }
          { this.state.activeGallery === 1 &&
          <Row>
            {residentialImages.map(img => (
              <Col xs={12} sm={6} md={4} lg={3} className="margin-top-20" key={img}> <img className="gallery-img" src={img} alt="construction of residential building" /> </Col>
            ))}
          </Row>
        }
        </div>
      </div>
    );
  }
}
export default Gallery;
