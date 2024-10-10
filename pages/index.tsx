import Image from "next/image";
import { HomeContainer, Product } from "./home";

import camiseta1 from "../assets/shirts/1.png";
import camiseta2 from "../assets/shirts/2.png";
import camiseta3 from "../assets/shirts/3.png";
import camiseta4 from "../assets/shirts/4.png";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";


export default function Home(props: { list: any; }) {

  const [sliderRef] = useKeenSlider({
    slides: {
    perView: 3,
    spacing: 48
  }    
  })

  return (
  <HomeContainer ref={sliderRef} className="keen-slider">
    <pre>{JSON.stringify(props.list)}</pre>

    <Product className="keen-slider__slide">
      <Image src={camiseta1} width={520} height={480} alt="" />

      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,90</span>
      </footer>
    </Product>

    <Product className="keen-slider__slide">
      <Image src={camiseta2} width={520} height={480} alt="" />

      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,90</span>
      </footer>
    </Product>

    <Product className="keen-slider__slide">
      <Image src={camiseta3} width={520} height={480} alt="" />

      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,90</span>
      </footer>
    </Product>

    <Product className="keen-slider__slide">
      <Image src={camiseta4} width={520} height={480} alt="" />

      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,90</span>
      </footer>
    </Product>
  </HomeContainer>
  )
}

export  const getServerSideProps = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))

  return {
    props: {
      list: [1, 2, 3]
    }
  }
}