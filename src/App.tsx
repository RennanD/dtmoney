import { useState } from 'react';

import { Header } from './components/Header';
import { NewTransactionsModal } from './components/NewTransactionModal';
import { Dashboard } from './pages/Dashboard';
import { GlobalStyle } from './styles/global';

export function App(): JSX.Element {
  const [isNewTransacationModalOpen, setIsNewTransacationModalOpen] = useState(
    false,
  );

  function handleToggleNewTransactionModal() {
    setIsNewTransacationModalOpen(oldState => !oldState);
  }

  return (
    <>
      <Header onToggleNewTransactionModal={handleToggleNewTransactionModal} />
      <Dashboard />
      <NewTransactionsModal
        onToggleNewTransactionModal={handleToggleNewTransactionModal}
        isNewTransacationModalOpen={isNewTransacationModalOpen}
      />
      <GlobalStyle />
    </>
  );
}
