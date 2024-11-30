import { createContext, useEffect, useState } from 'react';

interface TransactionProps {
  id: number
  type: 'income' | 'outcome';
  description: string
  category: string
  price: number
  createdAt: string
}

interface TransactionsContextProps {
  transactions: TransactionProps[];
}

interface TransactionsContextProviderProps {
  children: React.ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextProps);

export function TransactionsContextProvider({ children }: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  async function fetchTransactions() {
    const response = await fetch('http://localhost:3333/transactions');
    const data = await response.json();
    setTransactions(data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}