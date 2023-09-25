import { CircularProgress, Grid, Typography } from "@mui/material";
import useAsyncMocks from "../hooks/useAsyncMocks";
import products from "../mocks/products.json"
import ProductDetail from "./productDetail";

const productList = () => {
    const {data, loading} = useAsyncMocks(products)

    if(loading) return <CircularProgress/>
    return ( <div className="container">
        <Typography variant="h2" style={{color: "8F8C8C"}}>
            Productos
        </Typography>
        <Grid container spacing={3}>
            {
                data.map((product)=>{
                    return(
                        <ProductDetail key={product.id} product={product}>
                        </ProductDetail>
                    )
                })
            }
        </Grid>

    </div> );

}

export default productList;