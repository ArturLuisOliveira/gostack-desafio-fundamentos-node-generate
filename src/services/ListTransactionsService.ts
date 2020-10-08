import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

class ListTransactionsService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): Transaction[] {
    const transactions = this.transactionsRepository.all();
    return transactions;
  }
}
export default ListTransactionsService;
