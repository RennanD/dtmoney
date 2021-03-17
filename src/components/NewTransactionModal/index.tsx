import Modal from 'react-modal';
import { useState } from 'react';
import { Container, TransactionTypeContainer, TypeButton } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

type NewTransactionModalProps = {
  isNewTransacationModalOpen: boolean;
  onToggleNewTransactionModal: () => void;
};

export function NewTransactionsModal({
  isNewTransacationModalOpen,
  onToggleNewTransactionModal,
}: NewTransactionModalProps): JSX.Element {
  const [type, setType] = useState('deposit');

  return (
    <Modal
      isOpen={isNewTransacationModalOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      onRequestClose={onToggleNewTransactionModal}
    >
      <button
        onClick={onToggleNewTransactionModal}
        type="button"
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close" />
      </button>

      <Container>
        <h2>Cadastrar transação </h2>

        <input type="text" placeholder="Título" />

        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <TypeButton
            type="button"
            isActive={type === 'deposit'}
            onClick={() => {
              setType('deposit');
            }}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </TypeButton>

          <TypeButton
            type="button"
            isActive={type === 'withdrawn'}
            onClick={() => {
              setType('withdrawn');
            }}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </TypeButton>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />

        <button type="submit">Enviar</button>
      </Container>
    </Modal>
  );
}
