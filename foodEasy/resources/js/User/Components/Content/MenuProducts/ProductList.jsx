import React from 'react'
import { useParams } from 'react-router-dom';

function ProductList() {
    const { categoryId } = useParams();
    console.log(categoryId);
  return (
    <div>ProductList</div>
  )
}

export default ProductList