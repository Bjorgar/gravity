import { ErrorPageProps } from './types';

import { ErrorMessage, ErrorPageWrapper, Status } from './styled';

export default function ErrorPage({ status }: ErrorPageProps) {
  return (
    <ErrorPageWrapper>
      <ErrorMessage>
        Oops! something went terribly wrong..
      </ErrorMessage>
      <Status>
        {status}
      </Status>
    </ErrorPageWrapper>
  );
}
