import { useEffect } from 'react';
import { Summary } from '../../components/Summary';
import { TransactionsTable } from '../../components/TransactionsTable';
import { api } from '../../services/api';
import { Container } from './styles';

export function Dashboard(): JSX.Element {
  useEffect(() => {
    api.get('/transactions').then(response => {
      console.log(response.data);
    });
  }, []);

  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}
