import React from 'react';
import Card from './Card';
import CardHeading from '../Headings/CardHeading';
import './Card.css'
import classnames from 'classnames';

const Divider = props => (
  <Card className={classnames("contact__card", props.className)}>
   <CardHeading subheading="Headquarters" />
     <div className="contact__card--text">
       <div>
         <div> 83 Galaxy Blvd </div>
         <div>Toronto, Ontario, Canada </div>
       </div>
       <div>
         <div>Monday to Friday</div>
         <div>8:00am to 6:00pm</div>
       </div>
     </div>
  </Card>
);

export default Divider;
