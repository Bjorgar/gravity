/* eslint-disable max-len */
import { useLocation, useParams } from 'react-router-dom';

import {
  BackArrow,
  BackLink,
  ButtonText,
  DemoPageWrapper,
  GameName,
  Iframe,
  IframeWrapper,
  ProviderInfo,
} from './styled';

export default function DemoPage(): JSX.Element {
  const { id, provider, name } = useParams();
  const { state: title } = useLocation();

  const src = `http://test-proxy-server-lup-env.eba-2ipxdf96.ap-southeast-2.elasticbeanstalk.com/games/infin/${name}/${id}`;

  return (
    <DemoPageWrapper>
      <BackLink to="/">
        <BackArrow />
        <ButtonText>
          To Main Page
        </ButtonText>
      </BackLink>
      <GameName>{title as string}</GameName>
      <IframeWrapper>
        <Iframe src={src} title="test" height="400" width="788" />
        <ProviderInfo>
          provider: {provider}
        </ProviderInfo>
      </IframeWrapper>
    </DemoPageWrapper>
  );
}
