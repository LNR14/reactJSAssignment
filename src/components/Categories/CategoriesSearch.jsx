import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import ProductsLayout from '../Products/ProductsLayout';
import { FaSearch } from "react-icons/fa";
import {Row,Col,Button,Spinner} from 'react-bootstrap'

const CategoriesSearch = () => {
    const [loading, setLoading] = useState(true);
    const [categories,setCategories] = useState([])
    const [selectedCategory,setSelectedCategory] = useState("motorcycle")
    const [searchText, setSearchText] = useState("");
    const categoriesList = []
    useEffect(() => {
        const URL = "https://dummyjson.com/products/categories"
       const loadData = () =>{ axios.get(URL)
        .then(function (response) {
          console.log(response.data);
          setCategories(response.data)
          setLoading(false)
        })
        .catch(function (error) {
          console.log("error")
        })
        .finally(function () {  
          console.log("useEffect Completed")
        });
      }
        loadData()
 }, []);

 
 categories.forEach((category) => {
    categoriesList.push(<option key={category.slug}>{category.name}</option>);
  });

  const changedCategory = (e) => {
    console.log(e.target.value)
    setSelectedCategory(e.target.value)
    return e.target.value
  }

  const handleSearch = () =>{
    const search = {
      search:true,
      text:searchText
    }
    setSelectedCategory(search)
  }

  return (
    <div className='container'>
      <Row>
        <Col className='justify-content' >
          <Form.Control
              type="text"
              placeholder="What do you want to buy today?"
              className=" md-2 lg-6"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            </Col>
            <Col md={2} lg={1} style={{marginRight:"0.5rem"}}><Button variant="secondary" onClick={handleSearch} ><FaSearch/></Button></Col>
         {!loading ? (
            <Form.Select 
                style={{marginLeft:"2rem", width:"15rem",fontSize:"1rem", fontWeight:"500 "}}
                size='lg'
                aria-placeholder='Select a category' 
                onChange={(e) => changedCategory(e)}
            >
                <option></option>
                {categoriesList}
            </Form.Select>
      ) : (
        <Spinner animation="border" role="status">
        <span className="visually-hidden"></span>
      </Spinner>
      )}
      </Row>
      <ProductsLayout selectedCategory = {selectedCategory} />
    </div>
  )
}

export default CategoriesSearch
