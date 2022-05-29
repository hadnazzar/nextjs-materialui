import {useRouter} from 'next/router'
import styles from './products.module.css'
import {ProductType} from "./index";
import {GetStaticPropsContext} from "next";

type ProductDescriptionPagePropsType = {
  product: ProductType;
}

export const getStaticPaths = async () => {
  const response = await fetch('https://dummyjson.com/products')
  const data = await response.json();

  const products = data.products;

  const paths = products.map((product: ProductType) => {
    return {
      params: {
        id: product.id.toString()
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id;
  const response = await fetch(`https://dummyjson.com/products/${id}`)
  const product = await response.json();

  return {
    props: {
      product
    }
  }

}

const ProductDescriptionPage = ({product}: ProductDescriptionPagePropsType) => {
  const router = useRouter()

  const {id} = router.query
  return (
    <div className={styles.productDetailContainer}>
      <p>Product Id: {id} </p>
      <p>Title: {product.title} </p>
      <p>description: {product.description} </p>
      <p>price: {product.price} </p>
      <p>discountPercentage: {product.discountPercentage} </p>
      <p>rating: {product.rating} </p>
      <p>stock: {product.stock} </p>
      <p>brand: {product.brand} </p>
      <p>category: {product.category} </p>
      {product.images.map((image) => (
        <img src={image}  alt={''}/>
      ))}
    </div>
  )
}

export default ProductDescriptionPage;
