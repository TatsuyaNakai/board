module Queries
  # class CurrentAdmin < AuthenticateAdmin
  class CurrentAdmin < AuthenticateAdmin
    type Types::AdminType, null: true

    # resolver
    def resolve
      current_admin
    end
  end
end