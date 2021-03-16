import { Container } from './styles';

export function TransactionsTable(): JSX.Element {
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
          <tr>
            <td>Desenvolvimento de app</td>
            <td className="deposit">R$ 120000,00</td>
            <td>Desenvolvimento</td>
            <td>12/03/2021</td>
          </tr>

          <tr>
            <td>Alugel</td>
            <td className="withdrawn"> - R$ 1100,00</td>
            <td>Casa</td>
            <td>12/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
