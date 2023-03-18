class Types::ErrorType < Types::BaseObject
  field :messages,  [String], null: false
  field :attribute, String,   null: false
end
