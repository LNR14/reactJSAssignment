import React, { useEffect, useState } from 'react'
import './prodcutLayout.css'
import Product from './Product';
// import noProduct from '../../assets/noProducts'
// import myImage from './path_to_your_image.png';             
import {Row,Col,Image,Spinner} from 'react-bootstrap';
import axios from 'axios'

const ProductsLayout = (props) => {
    const imagePath = 'assignment\src\assets\noProducts.avif';
    const [loading, setLoading] = useState(true);
    const [data,setData] = useState("")
    const [selectedCategory,setSelectedCategory] = useState("")
    const [URL,setURL] = useState("")
    useEffect(() => {
      if(selectedCategory.search === true){
        setURL(`https://dummyjson.com/products/search/?q=${selectedCategory.text}`);
      }
      else if (selectedCategory) {
          setURL(`https://dummyjson.com/products/category/${selectedCategory}`);
          console.log("category changed")
      } else {
          setURL("https://dummyjson.com/products/");
      }
  }, [selectedCategory]);

  useEffect(() => {
      const loadData = async () => {
          if (!URL) return;

          setLoading(true);
          try {
              const response = await axios.get(URL);
              console.log(response.data);
              setData(response.data);
          } catch (error) {
              console.log("error", error);
          } finally {
              setLoading(false);
          }
      };
      loadData();
  }, [URL]);

  useEffect(() => {
      if (props.selectedCategory !== selectedCategory) {
          setSelectedCategory(props.selectedCategory);
      }
  }, [props.selectedCategory]);
   
  return (
    <div className='container'>
         {!loading ? (
            <Row gutter={40}>
                {data.products.map(product => 
                    <Col 
                    xs={{ span: 12 }} md={{ span: 5  }}
                    lg={{ span: 3 }}
                    >
                        <Product product={product}/>
                    </Col>
                )}
            </Row>
      ) : (
      <Spinner animation="border" role="status">
        <span className="visually-hidden"></span>
      </Spinner>
      )}

      {(!loading)&&(data.products.length ==0) &&  (
        <div className='container'>
        <Row>
        <h2> We are sorry there are no products in this category.</h2>
        </Row>
        <Row>
         <Image src={imagePath} alt='404 no Products found'></Image>
        </Row>
        </div>
      )}
</div>
  )
}

export default ProductsLayout
