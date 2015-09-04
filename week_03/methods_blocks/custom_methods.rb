# def hello(name="no name") # sets default argument to 'no name'.
#   puts "yolo #{name}" #must use double quotes for stirng interpolation
# end

# # defines method
# hello('James')
# #calls method

# #splat arguments
# def say_hello(*name)
#   puts name.inspect
# end
# say_hello('John', 'Paul', 'Ringo')
# #["John", "Paul", "Ringo"]


# def say_hello(*name)
#   puts name.join(' ')
# end
# say_hello('John', 'Paul', 'Ringo')
# #"John Paul Ringo"

# def say_hello(*name)
#   puts "hello #{name.join(' ')}"
# end
# say_hello('John', 'Paul', 'Ringo')
# #"hello John Paul Ringo"


# def mixed_args(a,b,*c)
#   puts a.inspect
#   puts b.inspect
#   puts c.inspect
# end

# mixed_args(1,5, 25, 51, 235)
# #1
# #5
# #[25, 51, 235]


# def mixed_args(a,b,*c, d)
#   puts a.inspect
#   puts b.inspect
#   puts c.inspect
#   puts d.inspect
# end

# mixed_args(1,5, 25, 51, 235)
# #1
# #5
# #[25, 51]
# #235

# def mixed_args(*a,b,c,d)
#   puts a.inspect
#   puts b.inspect
#   puts c.inspect
#   puts d.inspect
# end

# mixed_args(1, 5, 25, 51, 235)
# # [1, 5]
# # 25
# # 51
# # 235

