require 'pry'

get '/' do
  erb :index
end


post '/' do
  content_type :json
  roll = Roll.create
  {:num => roll.value}.to_json
end
