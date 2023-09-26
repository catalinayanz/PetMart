import { useParams } from "react-router-dom";
import useAsyncMock from "../hooks/useAsyncMocks";
import products from "../mocks/products.json";
import { CircularProgress, Grid } from "@mui/material";
import { Item } from "../Item/Item";

const CategoriesProductList = () => {
    const {CategoryId} = useParams();
    const {data, loading} = useAsyncMock(products);

    if(loading) return <CircularProgress />

    const categorySelected = CategoryId? data?.filter(category => category.category.toLowerCase() === CategoryId.toLowerCase()): data



    return( <div>
        <Grid container spacing={3}>
            {categorySelected.map((product)=>{
                return <Item key={product.id} item={product}/>
            })}
             </Grid>
    </div>
    );
}

export default CategoriesProductList;
