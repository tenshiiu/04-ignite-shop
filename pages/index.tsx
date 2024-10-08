import { styled } from "@/styles";

const Button = styled("button", {
  backgroundColor: "$green500",
  padding: "4px, 8px",
  border: 0,
  borderRadius: 4,

  span: {
    fontWeight: "bold",
  },

  "&:hover": {
    filter: "brightness(0.8)"
  },
})

export default function Home() {
  return (
  <>
    <Button>
    <span>Teste</span>    
    Enviar
    </Button>
  </>
  )
}

