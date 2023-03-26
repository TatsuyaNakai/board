module Mutations
  class UpdatePost < GraphQL::Schema::RelayClassicMutation
    # field
    field :result,     Boolean,                 null: false
    field :category_id,   ID,                 null: true

    # argument
    argument :id,      ID,                      required: true
    argument :status,  Types::Enums::PostStatus,required: true

    # resolver
    def resolve(id:, status:)
      post = Post.find(id)
      post.update!(status: status)
      { result: true, category_id: post.category_id }
    end
  end
end
