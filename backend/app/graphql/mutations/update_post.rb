module Mutations
  class UpdatePost < GraphQL::Schema::RelayClassicMutation
    # field
    field :result,     Boolean,                 null: false

    # argument
    argument :id,      ID,                      required: true
    argument :status,  Types::Enums::PostStatus,required: true

    # resolver
    def resolve(id:, status:)
      Post.find(id).update!(status: status)
      { result: true }
    end
  end
end
