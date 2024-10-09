import type { AppProps } from "next/app";
import { globalStyles } from "@/styles/global";
import "../styles/font.css";
import Image from "next/image";

import logoImg from "../assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
  <Container>
      <Header>
        <Image
          src={logoImg}
          alt="Logo Ignite"
        />
      </Header>

    <Component {...pageProps} />
  </Container>
  )
}
