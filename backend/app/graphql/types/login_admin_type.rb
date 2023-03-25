module Types
  class LoginAdminType < Types::BaseObject
    field :admin,         Types::AdminType,       null: true
    field :result,        Boolean,                null: false
    field :errors,        [Types::ErrorType],     null: true
    field :full_messages, String,                 null: true
  end
end
