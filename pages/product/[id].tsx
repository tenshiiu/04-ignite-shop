import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/product";
import { useRouter } from "next/router";

export default function Product() {
    const { query } = useRouter()

    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam ullam dicta commodi voluptatibus animi totam vero deleniti. Iure necessitatibus quidem magni enim recusandae ipsum voluptates maiores, laborum quisquam voluptatem.</p>

                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}