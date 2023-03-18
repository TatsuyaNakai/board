module Queries
  # class CurrentAdmin < AuthenticateAdmin
  class CurrentAdmin < GraphQL::Schema::Resolver
    type Types::AdminType, null: true

    # resolver
    def resolve
      current_admin
    end
  end
end