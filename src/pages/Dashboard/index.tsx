import React from 'react';

import logoImg from '../../assets/logo.png';
import incomeImg from '../../assets/income.png';
import outcomeImg from '../../assets/outcome.png';
import totalImg from '../../assets/total.png';

import Card from '../../components/Card';
import Transaction from '../../components/Transaction';

import {
  Container,
  Header,
  HeaderContent,
  Logo,
  Date,
  DashboardBody,
  CardScroll,
  Title,
  TransactionList,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <Logo source={logoImg} />

          <Date>12 de Julho</Date>
        </HeaderContent>
      </Header>

      <DashboardBody>
        <CardScroll>
          <Card
            title="Entradas"
            ammount="R$ 17.400,00"
            icon={incomeImg}
            lastTransactionSentence="Última entrada dia 10 de julho"
          />

          <Card
            title="Saídas"
            ammount="R$ 1.259,00"
            icon={outcomeImg}
            lastTransactionSentence="Última saída dia 7 de julho"
          />

          <Card
            title="Total"
            ammount="R$ 16.141,00"
            icon={totalImg}
            lastTransactionSentence="De 01 a 10 de julho"
            total
          />
        </CardScroll>

        <Title>Listagem</Title>

        <TransactionList>
          <Transaction
            title="Desenvolvimento de Site"
            type="income"
            value="R$ 12.000,00"
            category="Vendas"
          />

          <Transaction
            title="Hamburgueria Pizzy"
            type="outcome"
            value="- R$ 59,00"
            category="Alimentação"
          />

          <Transaction
            title="Aluguel do Apartamento"
            type="outcome"
            value="- R$ 1.200,00"
            category="Casa"
          />

          <Transaction
            title="Computador"
            type="income"
            value="R$ 5.400,00"
            category="Vendas"
          />
        </TransactionList>
      </DashboardBody>
    </Container>
  );
};

export default Dashboard;
