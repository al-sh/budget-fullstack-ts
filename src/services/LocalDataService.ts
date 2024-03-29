import { LocalAccount } from '../server/types/accounts';
import { LocalCategory } from '../server/types/categories';
import { LocalTransaction } from '../server/types/transactions';
import { getStorage } from './Storage';

enum EStorageLabels {
  ACCOUNTS = 'accounts',
  CATEGORIES = 'categories',
  TRANSACTIONS = 'transactions',
}

class LocalDataService {
  private static instance: LocalDataService;

  public static getInstance(): LocalDataService {
    if (!LocalDataService.instance) {
      LocalDataService.instance = new LocalDataService();
    }

    return LocalDataService.instance;
  }

  private _storage = getStorage();

  public get accounts() {
    const storagedAccounts = this._storage.getItem(EStorageLabels.ACCOUNTS);

    return Array.isArray(storagedAccounts) ? storagedAccounts : [];
  }

  public set accounts(items: LocalAccount[]) {
    this._storage.setItem(EStorageLabels.ACCOUNTS, items);
  }

  public get categories() {
    return this._storage.getItem(EStorageLabels.CATEGORIES);
  }

  public set categories(items: LocalCategory[]) {
    this._storage.setItem(EStorageLabels.CATEGORIES, items);
  }

  public get transactions() {
    const storagedTransactions = this._storage.getItem(EStorageLabels.TRANSACTIONS);

    return Array.isArray(storagedTransactions) ? storagedTransactions : [];
  }

  public set transactions(items: LocalTransaction[]) {
    this._storage.setItem(EStorageLabels.TRANSACTIONS, items);
  }
}

export const getLocalDataService = () => LocalDataService.getInstance();
