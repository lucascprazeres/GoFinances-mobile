import React, { useState, useEffect } from 'react';

import Income from '../../assets/income.svg';
import Outcome from '../../assets/outcome.svg';
import Total from '../../assets/total.svg';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Transaction from '../../components/Transaction';
import Navigator from '../../components/Navigator';

import api from '../../services/api';

import {
  Container,
  DashboardBody,
  CardScroll,
  Title,
  TransactionList,
} from './styles';

interface Transaction {
  id: string;
  title: string;
  type: 'income' | 'outcome';
  value: number;
  category: { title: string };
}

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get('transactions');
      const fetchedTransactions = response.data.transactions;
      setTransactions(fetchedTransactions);
    }
    loadData();
  }, []);

  return (
    <>
      <Container>
        <Header />
        <DashboardBody>
          <CardScroll>
            <Card
              title="Entradas"
              ammount="R$ 17.400,00"
              icon={Income}
              lastTransactionSentence="Última entrada dia 10 de julho"
            />

            <Card
              title="Saídas"
              ammount="R$ 1.259,00"
              icon={Outcome}
              lastTransactionSentence="Última saída dia 7 de julho"
            />

            <Card
              title="Total"
              ammount="R$ 16.141,00"
              icon={Total}
              lastTransactionSentence="De 01 a 10 de julho"
              total
            />
          </CardScroll>

          <Title>Listagem</Title>

          <TransactionList
            data={transactions}
            keyExtractor={transaction => transaction.id}
            renderItem={({ item }: { item: Transaction }) => (
              <Transaction
                title={item.title}
                type={item.type}
                value={item.value}
                category={item.category.title}
              />
            )}
          />
        </DashboardBody>
      </Container>
      <Navigator currentPage="Dashboard" />
    </>
  );
};

export default Dashboard;
