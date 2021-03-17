import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

type HeaderProps = {
  onToggleNewTransactionModal: () => void;
};

export function Header({
  onToggleNewTransactionModal,
}: HeaderProps): JSX.Element {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button onClick={onToggleNewTransactionModal} type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
