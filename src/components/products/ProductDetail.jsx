import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useState } from "react";

const ProductDetail = ({product, children}) => {
    const {id, title, precio, imagen, cantidad, category} = product
    const [iseSelecter, setIsSelected] = useState(false);

    return ( <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className="card-products-container">
            <img src={imagen}/>
            <CardContent>
                <Typography>
                    {title}
                </Typography>
                <Typography>
                    {precio.toFixed(2)}
                </Typography>
                <Typography>
                    {title}
                </Typography>

            </CardContent>
        </Card>
    </Grid> );
}

export default ProductDetail;