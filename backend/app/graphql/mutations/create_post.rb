module Mutations
  class CreatePost < GraphQL::Schema::RelayClassicMutation
    # field
    field :result,        Boolean,            null: false
    field :errors,        [Types::ErrorType], null: true
    field :full_messages, [String],           null: true

    # argument
    argument :category_id,  ID,     required: true
    argument :author_name,  String, required: false
    argument :email,        String, required: false
    argument :title,        String, required: false
    argument :body,         String, required: true

    # resolver
    def resolve(**args)
      post = Post.new(
        category_id: args[:category_id],
        author_name: args[:author_name],
        email: args[:email],
        title: args[:title],
        body: args[:body]
      )
      if post.save
        { result: true }
      else
        errors = post.errors
        post_errors = errors.details.keys.map do |attribute|
          { attribute: attribute.to_s.camelize(:lower), messages: errors.full_messages_for(attribute) }
        end

        { errors: post_errors, full_messages: errors.full_messages }
      end
    end
  end
end
