# Homepage (Root path)
get '/' do
  @contacts = Contact.all
  erb :index

end

get '/new' do
  contact = Contact.new
  content_type :json
    contacts.to_json
end

get '/contacts' do
  contacts = Contact.all
  content_type :json
    contacts.to_json
end

get '/new' do
  @contact = Contact.new(name: params[:name], email: params[:email], phone_number: params[:phone_number])
  if @contact.save
    redirect to('/index')
  end
end

