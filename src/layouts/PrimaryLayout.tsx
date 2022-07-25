/* eslint-disable no-console */
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Wrapper from '@src/components/Wrapper';
import { useGameContext } from '@src/contexts/GamesContext';
import MainPage from '@src/pages/MainPage';
import { GlobalStyle } from '@src/theme/global';
import { theme } from '@src/theme/theme';
import { ThemeProvider } from 'styled-components';

const ErrorPage = lazy(() => import('@src/pages/ErrorPage'));
const DemoPage = lazy(() => import('@src/pages/DemoPage'));

export default function PrimaryLayout() {
  const { errorInfo } = useGameContext();

  if (errorInfo) {
    console.error(errorInfo);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {
        errorInfo ? (
          <ErrorPage status={errorInfo} />
        ) : (
          <Wrapper>
            <Suspense>
              <Routes>
                <Route
                  path="/"
                  element={<MainPage />}
                />
                <Route
                  path="/games/:provider/:name/:id"
                  element={<DemoPage />}
                />
              </Routes>
            </Suspense>
          </Wrapper>
        )
      }
    </ThemeProvider>
  );
}
