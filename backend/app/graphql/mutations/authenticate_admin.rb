module Mutations
  class AuthenticateAdmin < GraphQL::Schema::RelayClassicMutation
    UNAUTHENTICATED_MESSAGE = 'UNAUTHENTICATED'

    def authorized?(**args)
      raise GraphQL::ExecutionError.new(UNAUTHENTICATED_MESSAGE) if current_admin.blank?

      super
    end

    def current_admin
      context[:current_admin]
    end
  end
end
