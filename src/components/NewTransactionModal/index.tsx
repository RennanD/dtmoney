import Modal from 'react-modal';
import { useState, FormEvent } from 'react';
import { Container, TransactionTypeContainer, TypeButton } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { api } from '../../services/api';

type NewTransactionModalProps = {
  isNewTransacationModalOpen: boolean;
  onToggleNewTransactionModal: () => void;
};

export function NewTransactionsModal({
  isNewTransacationModalOpen,
  onToggleNewTransactionModal,
}: NewTransactionModalProps): JSX.Element {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      amount,
      category,
      type,
    };

    api.post('/transactions', data).then(response => {
      console.log(response);
    });
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação </h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <TypeButton
            type="button"
            activeColor="green"
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
            activeColor="red"
            isActive={type === 'withdrawn'}
            onClick={() => {
              setType('withdrawn');
            }}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </TypeButton>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Enviar</button>
      </Container>
    </Modal>
  );
}
