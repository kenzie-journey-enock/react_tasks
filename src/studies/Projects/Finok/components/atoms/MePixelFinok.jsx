import { PixelContainer, PixelImage } from './StyleAtoms';
import mePixel from '../../assets/me_pixel.png';

export default function MePixelFinok() {
  return (
    <PixelContainer>
      <PixelImage src={mePixel} alt="Pixel art of me" />
    </PixelContainer>
  );
}