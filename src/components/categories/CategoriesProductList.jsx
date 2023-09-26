import { useParams } from "react-router-dom";
import useAsyncMock from "../hooks/useAsyncMocks";
import products from "../mocks/products.json";
import { CircularProgress, Grid } from "@mui/material";
import Item from "../Item/Item";

const CategoriesProductList = () => {
    const {categoryId} = useParams();
    const {data, loading} = useAsyncMock(products);

    if(loading) return <CircularProgress />

    const categorySelected = data.filter(category => category.category.toLowerCase() === categoryId.toLowerCase());



    return( <div>
        <Grid container spacing={3}>
            {categorySelected.map((product)=>{
                return <Item key={product.id} product={product}/>
            })}
             </Grid>
    </div>
    );
}

export default CategoriesProductList;
