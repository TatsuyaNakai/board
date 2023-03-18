module Mutations
  class CreateAdmin < BaseMutation
    # field
    field :admin,         Types::AdminType,   null: true
    field :errors,        [Types::ErrorType], null: true
    field :full_messages, [String],           null: true

    # argument
    argument :email,      String,   required: true
    argument :password,   String,   required: true

    # resolver
    def resolve(email:, password:)
      admin = Admin.new(email: email, password: password)
      if admin.save
        { admin: admin } 
      else
        errors = admin.errors
        admin_errors = errors.details.keys.map do |attribute|
          { attribute: attribute.to_s.camelize(:lower), messages: errors.full_messages_for(attribute) }
        end

        {
          errors: admin_errors,
          full_messages: errors.full_messages
        }
      end
    end
  end
end
