export default interface Customer {
  name: string,
  address: string,
  email: string,
  password: string,
  adminPrivileges: boolean,
  accounts: {
    chequing: number,
    savings: number,
    investments: number
  },
  transactionHistory: [
    transactionId: {
      name: string,
      date: string,
      amount: string,
      account: string
    }
  ]
}