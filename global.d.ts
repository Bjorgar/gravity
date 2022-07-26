declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';

declare global {
  module '*.svg' {
    const content: React.FC<React.SVGProps<SVGSVGElement>>;

    export default content;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type AnyType = any;
}

export default global;
