require 'pg'
require 'pry'

db = PG.connect(dbname: 'facebook', host: 'localhost')

begin #what happens here, if it fails will still run ensure
  db.exec('select * from people') do |result|
    result.each do |row|
      puts"#{row['first']}, #{row['last']}."
    end
  end

  print 'full name: '
  name = gets.chomp.split

  print 'DOB: '
  dob = gets.chomp

  print 'relationship: '
  relationship = gets.chomp

  print 'city: '
  city = gets.chomp

  sql = "INSERT INTO people (first, last, dob, relationship, city) VALUES ('#{name.first}', '#{name.last}', '#{dob}', '#{relationship}', '#{city}')"

  db.exec(sql)
ensure
#always do this code here, even if above fails and app quits.
  db.close
end