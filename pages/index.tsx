import { styled } from "@/styles";

const Button = styled("button", {
  backgroundColor: "$rocketseat",
  padding: "4px, 8px",
  border: 0,
  borderRadius: 8,

  span: {
    fontWeight: "bold",
  },

  "&:hover": {
    filter: "brightness(0.8)"
  },
})

const Header = styled("header", {
  display: "block",
  backgroundColor: "Blue",
  width: 256,
  height: 100,
  paddingBottom: 20,
})

export default function Home() {
  return (
  <>
    <Header>
    Olá, boa tarde!
    </Header>
    <Button>
    <span>Teste</span>    
    Enviar
    </Button>
  </>
  )
}

