module Mutations
  class DeleteCategory < AuthenticateAdmin
    # field
    field :result,  Boolean,  null: false

    # argument
    argument :id, ID, required: true

    # resolver
    def resolve(id:)
      Category.find(id).destroy
    end
  end
end
