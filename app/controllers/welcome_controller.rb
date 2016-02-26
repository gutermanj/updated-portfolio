class WelcomeController < ApplicationController
  def index
  	@contact = Contact.new
  end

  def contact

  	@contact = Contact.create(
  		@name => params[:contact][:name],
  		@email => params[:contact][:email],
  		@phonenumber => params[:contact][:email],
  		@message => params[:contact][:email]
  		)

  	ContactMailer.contact_email(@contact.last).deliver_now

  	redirect_to :back
  end

end
