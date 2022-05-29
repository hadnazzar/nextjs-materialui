import styles from './products.module.css';
import {Grid} from "@mui/material";
import Link from 'next/link'

export type ProductType = {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[]
}


type ProductsPagePropsType = {
  products: ProductType[]
}

export const getStaticProps = async () => {
  const response = await fetch('https://dummyjson.com/products')
  const data = await response.json();

  const products = data.products;

  return {
    props: {
      products
    }
  }
}

const Products = ({products}: ProductsPagePropsType) => {
  return (
    <div className={styles.productPage}>
    Products
      <div>
        {products.map((product)=> {
          return (
            <Link href={`/products/${product.id}`}>
              <div className={styles.productItem} key={product.id}>
                <Grid container spacing={2}>
                  <Grid className={styles.productTitle} item xs={8}>
                    {product.title}
                  </Grid>
                  <Grid item xs={4}>
                    <img className={styles.productImage} src={product.thumbnail} alt={'product image'}/>
                  </Grid>
                </Grid>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Products;
