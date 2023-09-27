import "./ItemListContainer.css"
import { useParams } from "react-router-dom";
import useAsyncMock from "../hooks/useAsyncMocks";
import products from "../mocks/products.json";
import { CircularProgress } from "@mui/material";
import { Item } from "../Item/Item";

const CategoriesProductList = () => {
    const {CategoryId} = useParams();
    const {data, loading} = useAsyncMock(products);

    if(loading) return <CircularProgress />

    const categorySelected = CategoryId? data?.filter(category => category.category.toLowerCase() === CategoryId.toLowerCase()): data



    return( <div className="container--ItemListContainer">
            {categorySelected.map((product)=>{
                return <Item key={product.id} item={product}/>
            })}
    </div>
    );
}

export default CategoriesProductList;
