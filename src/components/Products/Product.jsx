import React,{useEffect, useState} from 'react'
import {Row,Col,Card, Image, Button} from 'react-bootstrap';
import StarRating from './StarRating';
import './Product.css'

const product = (props) => {

  const [data,setData] = useState("")

  useEffect(() =>{
    setData(props.selectedCategory)
  },[])

  return (
      <Card>
        <Card.Img className='displayImage' variant="top"  src={props.product.thumbnail} />
        <Card.Body>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Subtitle className='subtitle'>
          {props.product.description}
        </Card.Subtitle>
        <Card.Subtitle className='price'>
          ${props.product.price}
        </Card.Subtitle>
        <StarRating rating={props.product.rating} />
      </Card.Body>
      </Card>
  )
}

export default product
