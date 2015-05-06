contacts = [
   {
      name: "Davey Baby",
      email: "d@d.baby",
      phone_number: "111-222-3333",
    },
     {
      name: "Brian Fellows",
      email: "bfell@oows.ca",
      phone_number: "444-555-7777",
    },
     {
      name: "Ginger Spice",
      email: "dontstop@nevergive.up",
      phone_number: "888-999-0000",
    },
     {
      name: "Shirley Jones",
      email: "gingerspice@wanna.be",
      phone_number: "757-949-0033",
    },

  ].each do |contacts_hash|

  Contact.where(:name => contacts_hash[:name]).first_or_create { |contact| 
    contact.update_attributes(contacts_hash)
  }

end