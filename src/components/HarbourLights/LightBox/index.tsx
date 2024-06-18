'use client';
import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';

import NextJsImage from './NextJsImage';

type LightBoxProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  slides: any[];
};

export default function LightBox({ open, setOpen, slides }: LightBoxProps) {
  return (
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      slides={slides}
      render={{ slide: NextJsImage }}
      plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
    />
  );
}
