import { useEffect, useState } from "react";
import { fetchData } from "../../data/fetchData";

import { MainNockBurguerStyle, ListProductsStyle } from "./StyleOrganisms"
import CardNockBurguer from "../molecules/CardNockBurguer";


export default function MainFinok() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const cart = JSON.parse(localStorage.getItem("cart"));

    const fetchListProducts = async () => {
      const data = await fetchData();

      if (data) {
        setProducts(data);
      } else {
        setError("Failed to fetch products.");
      }

      setIsLoading(false);
    };

    fetchListProducts();
  }, []);

  if (isLoading) {
    return <p>Loading products... 🔄</p>;
  }

  if (error) {
    return <p>Error: {error} ❌</p>;
  }



  return (
    <MainNockBurguerStyle>
      <ListProductsStyle>
        {products.map(product => (
          <CardNockBurguer
            key={product.id}
            id={product.id}
            img={product.img}
            name={product.name}
            category={product.category}
            price={product.price}
          />

        ))}
      </ListProductsStyle>
    </MainNockBurguerStyle>
  )
}
