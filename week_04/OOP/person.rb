# class Person

#   def talk words
#     puts "I can talk! Look at me ma! #{words}"
#   end

#   def set_name name 
#     return 'stupid name' if name.downcase == 'jorja'
#     puts 'Setting name...'
#     @name = name           #Kind of like .this in JS.
#   end

#   def get_name
#     puts 'Returning user\'s name...'
#     @name
#   end

# end

# # class Student < Person | inheritance. Not very Rubiest, use composition. 

# robert = Person.new
# puts robert.class
# # Person
# robert.talk('Popcorn and Coca-Cola')

# puts robert.class #Person
# puts robert.class.superclass #Object

# sam = Person.new
# sam.talk('Your mum, bruv')

# ta_one = Person.new
# ta_one.set_name 'Guillaume'
# puts ta_one.get_name

# student1 = Person.new
# student1.set_name('Christine')
# puts student1.get_name
# student1.talk '*shakes head*'

# #Person.new is a class method
# #.set_name is an Instance method, it is called on the instance of the.

# ======================== NOW WE ASK IT TO INITIALIZE WITH THE NAME AS A NEEDED ARGUMENT....

# class Person

#   def initialize(name) #with a Z!
#     #you cannot call this on itself (ie: Person.initialize) it is something to be called when the class instance is instantiated.
#     @name = name

#   end

#   def talk words
#     puts "I can talk! Look at me ma! #{words}"
#   end

#   # def set_name name 
#   #   puts 'Setting name...'
#   #   @name = name           # no longer needed.
#   # end

#   def name
#     @name
#   end
# end

# student1 = Person.new('Christine')
# puts "The students name is #{student1.name}"
# student1.talk '*shakes head*'

# #see how much cleaber this is now it's done with the class instansiation.




# class Person

#   def initialize(name) #with a Z!
#     #you cannot call this on itself (ie: Person.initialize) it is something to be called when the class instance is instantiated.
#     @name = name
#   end

#   def talk words
#     puts "I can talk! Look at me ma! #{words}"
#   end

#   def set_age age 
#     @age = age
#   end

#   def age
#     @age
#   end
  
#   def name
#     @name
#   end

# end

# student1 = Person.new('Christine')
# puts "The students name is #{student1.name} and she is #{student1.age}"
# student1.set_age 19


# ==========================================

# class Person

#   # attr_reader :age, :name
#   # attr_writer :age, :name

#   attr_accessor :age, :name 
#   # Does both attr_reader and attr_writer 
#   # !!! Use with caution !!! 

#   def initialize(name) #with a Z!
#     #you cannot call this on itself (ie: Person.initialize) it is something to be called when the class instance is instantiated.
#     @name = name
#     @age = age
#   end

#   # setter
#   def talk words
#     #words is a local variable, only available to this function
#     # @name is an instance variable, it is available to everything in this instance.
#     puts "My name is #{@name} I can talk! Look at me ma! #{words}"
#   end

#   # def age=(age) 
#   #   @age = age
#   # end           - NOW A WRITER, see top. 

#   # getter
#   # attr_reader :age - see top.
#   # def age
#   #   @age
#   # end
  
#   # def name
#   #   @name
#   # end          - see top

# end

# student1 = Person.new('Christine', 90)
# student1.age = 3
# puts "The student's name is #{student1.name} and she is #{student1.age} years old."

# =================================================

# class Person

#   # attr_reader :age, :name
#   # attr_writer :age, :name

#   attr_accessor :age, :name 
#   # Does both attr_reader and attr_writer 
#   # !!! Use with caution !!! 
  
#   @@count = 0 #this is a *class* method. See below.

#   DEFAULT_NUMBER_OF_LEGS = 3
  
#   def self.count #was called Person.class but what if class name needs to change? 
#     @@count #this is a *class* method getter. 
#   end

#   def initialize(name, age) #with a Z!
#     #you cannot call this on itself (ie: Person.initialize) it is something to be called when the class instance is instantiated.
#     @name = name
#     @age = age
#     @@count += 1
#   end

#   # setter
#   def talk words
#     #words is a local variable, only available to this function
#     # @name is an instance variable, it is available to everything in this instance.
#     puts "My name is #{@name} I can talk! Look at me ma! #{words}"
#   end

# end

# puts Person.count

# student1 = Person.new('Christine', 90)
# student1.age = 3
# puts "The student's name is #{student1.name} and she is #{student1.age} years old."
# puts Person.count

# Person.new('I am Jack', 1)
# puts Person.count

# puts Person::DEFAULT_NUMBER_OF_LEGS

# =================================================

class Bikes
  attr_reader :brand, :model
  attr_writer :cost, :rrp

  @@stock = 0

  WARRANTY = "Lifetime"

  def initialize(brand, model)
    @@stock += 1
    @brand = brand
    @model = model
    # @cost = nil
    # @rrp = nil
  end

  def self.stock
    @@stock
  end

  def info
    puts "I am a #{model} made by #{brand}"
  end

  def price value
    puts "Today I cost £#{value}, my normal cost is #{:rrp}"
  end

end


bike1 = Bikes.new('Edwardes', 'Track Champ')
bike1.rrp = 630.00
bike1.cost = 550.00
puts Bikes.stock
puts bike1.rrp
puts bike1.cost
puts bike1.info

puts Bikes.stock
bike2 = Bike.new('14BikeCo', 'PoloBike')
bike2.rrp = 1500.00
bike2.cost = 1333.00
puts Bikes.stock
puts bike2.rrp
puts bike2.cost
puts bike2.info