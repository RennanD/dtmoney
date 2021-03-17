import Modal from 'react-modal';
import { Container } from './styles';

import closeImg from '../../assets/close.svg';

type NewTransactionModalProps = {
  isNewTransacationModalOpen: boolean;
  onToggleNewTransactionModal: () => void;
};

export function NewTransactionsModal({
  isNewTransacationModalOpen,
  onToggleNewTransactionModal,
}: NewTransactionModalProps): JSX.Element {
  return (
    <Modal
      isOpen={isNewTransacationModalOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      onRequestClose={onToggleNewTransactionModal}
    >
      <button type="button" className="react-modal-close">
        <img src={closeImg} alt="Close" />
      </button>

      <Container>
        <h2>Cadastrar transação </h2>

        <input type="text" placeholder="Título" />

        <input type="number" placeholder="Valor" />

        <input type="text" placeholder="Categoria" />

        <button type="submit">Enviar</button>
      </Container>
    </Modal>
  );
}
