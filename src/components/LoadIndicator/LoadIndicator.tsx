import { IndicatorProps } from './types';

import { Loading } from './styled';

export default function LoadIndicator({ size }: IndicatorProps): JSX.Element {
  return (
    <Loading size={size} />
  );
}
