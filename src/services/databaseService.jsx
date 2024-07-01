import React, { useEffect } from 'react'
import axios from 'axios';

const database = () => {

}

export default database

const fetchData = async () => {
    const URL = "https://dummyjson.com/products"
    try {
        // Simulate an API call
        const response1 = await new Promise(resolve => {
            // setTimeout(() => resolve({ data: 'Sample Data' }), 1000);
            axios.get(URL)
            .then(function (response) {
              // handle success
              console.log(response.data.limit);
                    return "hello"
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .finally(function () {
              // always executed
            });
        });
        return "something";
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    

};

export {fetchData}

