import Modal from 'react-modal';

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
      onRequestClose={onToggleNewTransactionModal}
    >
      <h2>Cadastrar transação </h2>
    </Modal>
  );
}
