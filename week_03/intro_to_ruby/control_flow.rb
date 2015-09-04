# puts 'hello' if true

if !true 
  puts 'hello'
else 
  puts 'bye'
end 

if true then puts 'hello' else puts 'bye' end

  

print 'Enter a number: '
n= gets.to_i

if n > 0 
  puts 'Your number is positive'
elsif n <  0
  puts 'Your number is negative'
else
  puts 'Your number is zero'
end

print 'Enter a number: '
n = gets.to_i

unless n > 10
  puts 'too small!'
else
  puts 'too Large!'
end 

user_registered = false
puts 'please signup!' unless user_registered

puts 'Exit the program> (yes or no):'
answer = gets.chomp.downcase

case answer
when 'yes'
  puts 'bye!'
  Exit
when 'no'
  puts 'okay crackon then'
else 
  puts 'eh? I do not compute'
end

puts 'continuing with program...'

n = 1 

while n < 11
  puts n
  # n = n + 1
  n += 1
end
puts 'done'

loop, gets, puts

puts 'Hey user, what is the square root of 64?'
user_answer = gets.chomp.to_i

while user_answer != 8
  puts 'sorry, try again'
  user_answer = gets.chomp.to_i
end
puts 'correct'

chomp not necessary when using .to_i, you can also have ruby do the work:

puts 'Hey user, what is the square root of 64?'
user_answer = gets.to_i

while user_answer != Math.sqrt(64)
  puts 'sorry, try again'
  user_answer = gets.to_i
end
puts 'correct'



