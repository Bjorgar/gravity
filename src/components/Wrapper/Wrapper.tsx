import { WrapperPops } from './types';

import { CommonWrapper, Paper } from './styled';

export default function Wrapper({ children }: WrapperPops) {
  return (
    <CommonWrapper>
      <Paper>
        {children}
      </Paper>
    </CommonWrapper>
  );
}
