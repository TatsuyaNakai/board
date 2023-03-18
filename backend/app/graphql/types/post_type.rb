module Types
  class PostType < Types::BaseObject
    field :id,            ID,                                 null: false
    field :category_id,   Int,                                null: false
    field :status,        Types::Enums::PostStatus,           null: false
    field :author_name,   String,                             null: true
    field :email,         String,                             null: true
    field :title,         String,                             null: true
    field :body,          String,                             null: false
    field :created_at,    GraphQL::Types::ISO8601DateTime,    null: false
    field :updated_at,    GraphQL::Types::ISO8601DateTime,    null: false
  end
end
