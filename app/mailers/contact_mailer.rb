class ContactMailer < ApplicationMailer
	default from: "gutermanj@gmail.com"

	def contact_email
		mail(to: 'gutermanj@gmail.com', subject: "Contact From Portfolio")
	end
end
