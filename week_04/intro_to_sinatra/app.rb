require 'sinatra'
require 'sinatra/reloader' if development?
require 'pry'

get '/' do
  @header = 'Homepage'
  @data = {
    name: 'James',
    age: 10,
    hobbies: ['bike polo', 'coffee', 'your mum']
  }
  erb :home
end

get '/hi/:firstname/:lastname/:age' do 
  # binding.pry
  "I'm sinatra and i am saying hi to #{params[:firstname]} #{params[:lastname]} who is #{params[:age]}"
end

# get '/' do
#   puts 'this won\'t show in browser cus it\'s on the server not the client, it\'ll show in the terminal of the server though'
#   'say wot?'
#   'say this gets to the browser not the above, cus it\'s the LAST THING'
# end

# get('/') {'hello world'} < not used syntax but will work.

# VERB 'PATH' do
# EXECUTE CODE
# end