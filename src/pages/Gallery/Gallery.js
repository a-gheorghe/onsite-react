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

const rexallImagesArn = [rexall1, rexall2];
const rexallImagesBronte = [rexall3, rexall4];
const rexallImagesGerrard = [rexall5, rexall6, rexall7, rexall8];

const tacitImages = [tacit1, tacit2, tacit3]
const wantImages = [want1, want2, want3]
const riocanImages = [riocan1, riocan2, riocan3]

const residentialImages = [
  res1, res2, res3, res4, res5, res6, res7, res8, res9, res11, res12, res13, res14
]

class Gallery extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeGallery: 0
    }
  }

  componentDidMount() {
      if (this.props.activePage !== "Gallery") {
        this.props.changeActivePage('Gallery');
      }
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
          <React.Fragment>
            <Row>
              <Col xs={12} className="margin-top-20 gallery__address">
                <span className="gallery__address--name">Rexall</span> <br/>
                22 Baskin Dr E, Arnprior
              </Col>
              {rexallImagesArn.map(img => (
                <Col xs={12} sm={6} md={4} lg={3} className="margin-top-20" key={img}> <img className="gallery-img" src={img} alt="construction of rexall building" /> </Col>
              ))}
            </Row>
            <Row>
              <Col xs={12} className="margin-top-20 gallery__address">
                  <span className="gallery__address--name">Rexall, Pharma Plus</span> <br/>
                  Bronte Village, Oakville
              </Col>
              {rexallImagesBronte.map(img => (
                <Col xs={12} sm={6} md={4} lg={3} className="margin-top-20" key={img}> <img className="gallery-img" src={img} alt="construction of rexall building" /> </Col>
              ))}
            </Row>
            <Row>
              <Col xs={12} className="margin-top-20 gallery__address">
                  <span className="gallery__address--name">Rexall</span> <br/>
                  Yonge and Gerrard, Toronto
              </Col>
              {rexallImagesGerrard.map(img => (
                <Col xs={12} sm={6} md={4} lg={3} className="margin-top-20" key={img}> <img className="gallery-img" src={img} alt="construction of rexall building" /> </Col>
              ))}
            </Row>
            <Row>
              <Col xs={12} className="margin-top-20 gallery__address">
                  <span className="gallery__address--name">Tacit</span> <br/>
                  2 Sheppard Ave, Toronto
              </Col>
              {tacitImages.map(img => (
                <Col xs={12} sm={6} md={4} lg={3} className="margin-top-20" key={img}> <img className="gallery-img" src={img} alt="construction of rexall building" /> </Col>
              ))}
            </Row>
            <Row>
              <Col xs={12} className="margin-top-20 gallery__address">
                  <span className="gallery__address--name">RioCan</span> <br/>
                  2 Sheppard Ave, Toronto
              </Col>
              {riocanImages.map(img => (
                <Col xs={12} sm={6} md={4} lg={3} className="margin-top-20" key={img}> <img className="gallery-img" src={img} alt="construction of rexall building" /> </Col>
              ))}
            </Row>
            <Row>
              <Col xs={12} className="margin-top-20 gallery__address">
                  <span className="gallery__address--name">Wantapothecary</span> <br/>
                  2579 Yonge St, Toronto
              </Col>
              {wantImages.map(img => (
                <Col xs={12} sm={6} md={4} lg={3} className="margin-top-20" key={img}> <img className="gallery-img" src={img} alt="construction of rexall building" /> </Col>
              ))}
            </Row>
          </React.Fragment>
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
