module Mutations
  class CreateCategory < AuthenticateAdmin
    # field
    field :result,        Boolean,            null: false
    field :errors,        [Types::ErrorType], null: true
    field :full_messages, [String],           null: true

    # argument
    argument :name, String, required: true

    # resolver
    def resolve(name:)
      category = Category.new(name: name)
      if category.save
        { result: true }
      else
        errors = category.errors
        category_errors = errors.details.keys.map do |attribute|
          { attribute: attribute.to_s.camelize(:lower), messages: errors.full_messages_for(attribute) }
        end

        { errors: category_errors, full_messages: errors.full_messages }
      end
    end
  end
end
