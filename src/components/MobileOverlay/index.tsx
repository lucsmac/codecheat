import { Overlay, Logo } from "./styles";

export default function MobileOverlay() {
  return (
    <Overlay>
      <Logo src='/assets/images/Logo.png' />
      <span>Visualização disponível somente em resoluções maiores.</span>
    </Overlay>
  )
}