function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  // simulate bank account data
  const account = {
    balance: 500,
    transactions: []
  };
  // function to withdraw money from account
  async function withdraw(amount) {
    if (amount > account.balance) {
      throw new Error('Insufficient funds');
    }
    account.balance -= amount;
    account.transactions.push({ type: 'withdrawal', amount });
    await delay(1000); // simulate a delay for the transaction to process
    return `Successfully withdrew ${amount} dollars. New balance is ${account.balance} dollars.`;
  }
  // function to deposit money into account
  async function deposit(amount) {
    account.balance += amount;
    account.transactions.push({ type: 'deposit', amount });
    await delay(1000); // simulate a delay for the transaction to process
    return `Successfully deposited ${amount} dollars. New balance is ${account.balance} dollars.`;
  }
  // function to fetch account data
  async function getAccountData() {
    const balancePromise = Promise.resolve(`Current balance is ${account.balance} dollars.`);
    const transactionPromise = Promise.resolve(account.transactions);
    const [balanceMessage, transactions] = await Promise.all([balancePromise, transactionPromise]);
    return {
      balanceMessage,
      transactions
    };
  }
  // main function
  async function main() {
    try {
      console.log('Welcome to the bank app.');
      console.log(await deposit(100));
      console.log(await withdraw(200));
      console.log(await deposit(50));
      const accountData = await getAccountData();
      console.log(accountData.balanceMessage);
      console.log('Transaction history:', accountData.transactions);
    } catch (error) {
      console.error(error);
    }
  }
  main();