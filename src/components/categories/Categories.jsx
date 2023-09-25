import { Card, CardContent, CircularProgress, Link, Typography } from "@mui/material";
import useAsyncMocks from "../hooks/useAsyncMocks";
import categories from "../mocks/categories.json";


const Categories = () => {
    const {data, loading} = useAsyncMocks(categories)

    if(loading) return <CircularProgress />

    return ( <div className="container">
       <Typography variant="h2" style={{color: "#8f8c8c"}}>
        Categorias
        </Typography>
        {
            data.map((category)=> {
                return(
                    <Card key={category.id}>
                    <CardContent component={Link} to={`/category/${category.category}`}>
                        <Typography >{category.category}</Typography>
                    </CardContent>
                </Card>
                )
            })
        }
    </div> );
}

export default Categories;