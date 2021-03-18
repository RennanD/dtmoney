import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

type TransactionsData = {
  id: number;
  title: string;
  type: 'deposit' | 'withdrawn';
  category: string;
  amount: number;
  formatedAmount: string;
  created_at: Date;
  formattedDate: string;
};

export function TransactionsTable(): JSX.Element {
  const [transactions, setTransactions] = useState<TransactionsData[]>([]);

  useEffect(() => {
    api.get('/transactions').then(response => {
      const data = response.data.transactions.map(
        (transaction: TransactionsData) => ({
          ...transaction,
          formattedDate: Intl.DateTimeFormat().format(
            new Date(transaction.created_at),
          ),
          formatedAmount: Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(transaction.amount),
        }),
      );

      setTransactions(data);
    });
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{transaction.formatedAmount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.formattedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
