export interface ImageProps {
  width: number;
  height: number;
  imageId: string;
}

export type ImgArgs = Omit<ImageProps, 'imageId'>;
