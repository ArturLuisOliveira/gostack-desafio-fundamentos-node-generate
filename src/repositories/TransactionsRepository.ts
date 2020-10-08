import Balance from '../models/Balance';
import Transaction from '../models/Transaction';

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    const transactions = [...this.transactions];
    return transactions;
  }

  public getBalance(): Balance {
    const income: number = this.transactions.reduce((acc, cur) => {
      if (cur.type === 'income') return acc + cur.value;
      return acc;
    }, 0);
    const outcome: number = this.transactions.reduce((acc, cur) => {
      if (cur.type === 'outcome') return acc + cur.value;
      return acc;
    }, 0);
    return new Balance({ income, outcome });
  }

  public create({ title, value, type }: Omit<Transaction, 'id'>): Transaction {
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
