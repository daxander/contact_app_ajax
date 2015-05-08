# Homepage (Root path)
get '/' do
  @contacts = Contact.all
  erb :index

end



get '/contacts' do
  contacts = Contact.all
  content_type :json
    contacts.to_json
end

post '/create' do
  @contact = Contact.new(name: params[:name], email: params[:email], phone_number: params[:phone_number])
  @contact.save
  # if @contact.save
  #   content_type :json
  #     return @contact.to_json
  # end
end

get '/search' do
  search = params[:search]
  contacts = Contact.where("name LIKE ? OR email LIKE ? OR phone_number LIKE ?", "%#{search}%", "%#{search}%", "%#{search}%")
  content_type :json
    contacts.to_json
end