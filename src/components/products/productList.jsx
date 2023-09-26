import { CircularProgress, Grid, Typography } from "@mui/material";
import useAsyncMocks from "../hooks/useAsyncMocks";
import products from "../mocks/products.json"
import Item from "../Item/Item";

const ProductList = () => {
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
                        <Item key={product.id} product={product}>
                        </Item>
                    )
                })
            }
        </Grid>

    </div> );

}

export default ProductList;