import React, { useEffect } from 'react'
import {Row,Col, Table} from 'react-bootstrap'
import { BsBasket3Fill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <div className='container-fluid '>
      <Row className='footer'>
        <Col>
          
    <Table borderless="true">
      <thead>
        <tr>
          <th>Company Info</th>
          <th>Customer Care</th>
          <th>Help and support</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>About</td>
          <td>Shopping Info</td>
          <td>Contact Us</td>
        </tr>
        <tr>
          <td>Social Responsibility</td>
          <td>Returns</td>
          <td>Payment</td>
        </tr>
        <tr>
          <td>Affiliate</td>
          <td >How to order</td>
          <td>bonus points</td>
        </tr>
      </tbody>
    </Table>
        </Col>
        <Col>
        <Row>
          <h3>
            Socials
          </h3>
        </Row>
          <Row className='footer-icons'>
          <FaFacebook /><FaSquareInstagram /> <FaSquareXTwitter />     <AiFillTikTok />
          </Row>
        </Col>
        <Col xs={2}>
        <Row>
          <h3>
            Platforms
          </h3>
        </Row>
          <Row className='footer-icons'>
          <IoLogoAndroid /> <FaApple />
          </Row>
        </Col>

      </Row>
    </div>
  )
}

export default Footer
