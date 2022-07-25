import { ImageProps } from './types';

import { Img } from './styled';

export default function Image({
  imageId,
  height,
  width,
}: ImageProps): JSX.Element {
  const src = `${process.env.CDN}${imageId}.png`;

  return (
    <Img
      height={height}
      width={width}
      src={src}
      loading="lazy"
    />
  );
}
