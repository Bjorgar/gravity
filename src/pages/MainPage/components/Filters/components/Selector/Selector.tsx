/* eslint-disable no-console */
import { ReactNode, useRef, useState } from 'react';
import LoadIndicator from '@src/components/LoadIndicator';
import { IndicatorSize } from '@src/components/LoadIndicator/types';
import { useFetch } from '@src/hooks/useFetch';
import { useOutsideClick } from '@src/hooks/useOutsideClick';
import { Provider, ProviderRes } from '@src/types/response';

import { PROVIDERS_URL } from './constants';
import { SelectorProps } from './types';

import {
  Arrow,
  ArrowWrapper,
  ButtonText,
  InfoText,
  Option,
  SelectorBody,
  SelectorButton,
  SelectorWrapper,
} from './styled';

export default function Selector({
  setFilterData,
}: SelectorProps): JSX.Element {
  const [provider, setProvider] = useState('Select provider');
  const [isActive, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref,
    cb: () => setActive(false),
  });

  const {
    isLoading,
    resData: providers,
    errorInfo,
  } = useFetch<ProviderRes>(PROVIDERS_URL);

  const selectProvider = ({
    title,
    id,
  }: Provider): void => {
    setProvider(title);
    setActive(false);
    setFilterData((s) => ({
      ...s,
      provider: id,
    }));
  };

  const shownElement = (): ReactNode => {
    if (isLoading) {
      return <LoadIndicator size={IndicatorSize.m} />;
    }

    if (errorInfo) {
      console.error(errorInfo);
      return <InfoText>Something Wrong :(</InfoText>;
    }

    if (providers) {
      return (
        <>
          <SelectorButton
            onClick={() => setActive((s) => !s)}
          >
            <ButtonText>
              {provider}
            </ButtonText>
            <ArrowWrapper isActive={isActive}>
              <Arrow />
            </ArrowWrapper>
          </SelectorButton>
          <SelectorBody
            isActive={isActive}
          >
            <Option
              onClick={() => selectProvider({
                title: 'Select provider',
                id: '',
              })}
            >
              Select provider
            </Option>
            {
            providers.map(({ id, title }) => (
              <Option
                key={id}
                onClick={() => selectProvider({ title, id })}
              >
                {title}
              </Option>
            ))
          }
          </SelectorBody>
        </>
      );
    }

    return <InfoText>No providers</InfoText>;
  };

  return (
    <SelectorWrapper
      ref={ref}
    >
      {shownElement()}
    </SelectorWrapper>
  );
}
