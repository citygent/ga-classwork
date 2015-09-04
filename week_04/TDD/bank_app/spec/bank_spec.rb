require_relative '../lib/bank'

describe Bank do 

  let(:bank) { Bank.new('GA Bank') }
  
  it 'Should be able to create new bank object' do
    expect(bank).to_not eq nil # expect(bank.class).to eq Bank  -or-  # expect(bank.instance_of? Bank).to eq true
  end

  it 'should have a name attached' do 
    expect(bank.name).to eq 'GA Bank'
  end

  it 'creates an account' do 
    bank.add_account('Jimmy', 1)
    expect(bank.accounts['Jimmy']).to eq 1  
  end

  it 'creates an account with a starting balance of zero' do 
    bank.add_account('Niall', 0)
    expect(bank.accounts['Niall']). to eq 0
  end

  it 'should be able to handle customer\'s deposits' do 
    bank.add_account('Jimmy', 1)
    bank.deposit('Jimmy', 499)
    expect(bank.accounts['Jimmy']).to eq 500
  end

  it 'returns the balance of an account' do 
    bank.add_account('Jimmy', 250)
    expect(bank.balance('Jimmy')).to eq 250
  end

  it 'allows customer to withdraw' do 
    bank.add_account('Jimmy', 500)
    bank.withdraw('Jimmy', 50)
    expect(bank.balance('Jimmy')).to eq 450
  end


end
