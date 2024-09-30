import React ,{useState,useContext,useEffect}from 'react'
import { useParams } from 'react-router-dom' 
import { ShopContext } from '../context/shopContext';
import { assets } from '/assets/assets';

const Product = () => {

  const {productId} = useParams();
  const {products} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');

  const fetchProductData = async () =>{
    products.map((item)=>{
      if(item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        console.log(item);
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in dration-500 opacity-100'>
      
      {/* Product Data */}
      <div className='flex flex-row gap-12 sm:gap-12 sm:flex-row:'>

      {/* Product images Left */}
      <div className='flex flex-col-reverse gap-1 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
             {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
             }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt="" />
          </div>
      </div>               

        {/* Product Details Right */} 

        <div className='flex-2'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className='w-3 5' />
            <img src={assets.star_icon} alt="" className='w-3 5' />
            <img src={assets.star_icon} alt="" className='w-3 5' />
            <img src={assets.star_icon} alt="" className='w-3 5' />
            <img src={assets.star_dull_icon} alt="" className='w-3 5' />
          </div>
        </div>
      </div>
    </div>
  ) : 
  <div className='opacity-0'></div>
}

export default Product