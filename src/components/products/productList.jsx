import { CircularProgress, Grid, Typography } from "@mui/material";
import useAsyncMocks from "../hooks/useAsyncMocks";
import products from "../mocks/products.json"
import Item from "../Item/Item";
import "./productList.css"

const ProductList = () => {
    const {data, loading} = useAsyncMocks(products)

    if(loading) return <CircularProgress/>
    return ( <div className="container--cards">
        <Typography variant="h2" style={{color: "#ba68c8"}}>
            Productos
        </Typography>
        <Grid container spacing={3}>
            {
                data.map((product)=>{
                    return(
                        <Item key={product.id} product={product}>
                        </Item>
                    )
                })
            }
        </Grid>

    </div> );

}

export default ProductList;