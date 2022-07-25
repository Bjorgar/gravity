import { BrowserRouter } from 'react-router-dom';
import { GameContextProvider } from '@src/contexts/GamesContext';
import PrimaryLayout from '@src/layouts/PrimaryLayout';

export default function App() {
  return (
    <GameContextProvider>
      <BrowserRouter>
        <PrimaryLayout />
      </BrowserRouter>
    </GameContextProvider>
  );
}
