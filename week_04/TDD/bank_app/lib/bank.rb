class Bank

  attr_accessor :accounts, :name

  def initialize name
    @name = name
    @accounts = {}
  end

  def add_account(name, deposit)
    accounts[name] = deposit
  end

  def deposit(account, amount)
    accounts[account] += amount
  end

  def withdraw(account, amount)
    accounts[account] -= amount
  end

  def balance account
    accounts[account]
  end

end