import Balance from '../models/Balance';
import TransactionsRepository from '../repositories/TransactionsRepository';

class GetBalanceService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): Balance {
    const balance = this.transactionsRepository.getBalance();
    return balance;
  }
}

export default GetBalanceService;
