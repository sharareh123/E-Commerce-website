import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Component/Breadcrums/Breadcrum';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Component/DescriptionBox/DescriptionBox';
import RealatedProduct from '../Component/RealatedProduct/RealatedProduct';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}= useParams();
  const product = all_product.find((e)=>e.id===Number(productId))
  return (
    <div className='product'>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RealatedProduct/>
    </div>
  )
}

export default Product
