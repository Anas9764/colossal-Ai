import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import polylogo from '../../assets/images/polylogo.png'
import collection from '../../assets/images/collection.png'
import nlp from '../../assets/images/nlp.png'
import vision from '../../assets/images/vision.png'


import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./Annotation.css"

const Annotation = () => {
  return (
  <>
  <section id='annot' className='pt-md-5 '>
  <h1 id='title1'>Annotation Services</h1>
<div className="container ">
  <div className="row gy-3 mb-6">

  <div className="col-md-4 ">
      <div class="card" >
  <img src={vision} class="card-img-top" alt="..." width="18" />
  <div className="card-body">
    <h3 id='title2' className="card-title text-center">Computer Vision Annotation</h3>
    <a href="#" className="card-text d-flex justify-content-center align-items-center" >learm more--></a>
    <a href="#" className="card-text d-flex justify-content-center align-items-center mt-3" >Work Sample →</a>
 
  </div>
</div>
    </div>
    <div className="col-md-4 ">
      <div class="card" >
  <img src={nlp} class="card-img-top" alt="..." width="18" />
  <div className="card-body">
    <h3 id='title2' className="card-title text-center">NLP Annotation</h3>
    <a href="#" className="card-text d-flex justify-content-center align-items-center" >learm more--></a>
    <a href="#" className="card-text d-flex justify-content-center align-items-center mt-3" >Work Sample →</a>
 
  </div>
</div>
    </div>
    <div className="col-md-4 ">
      <div class="card" >
  <img src={collection} class="card-img-top" alt="..." width="18" />
  <div className="card-body">
    <h3 id='title2' className="card-title text-center">Data Collection</h3>
    <a  href="#" className="card-text d-flex justify-content-center align-items-center" >learm more--></a>
    <a href="#" className="card-text d-flex justify-content-center align-items-center mt-3" >Work Sample →</a>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
    </div>
  </div>
</div>
</section>
  </>
  )
}
// style="width: 18rem;"
export default Annotation

