module Resolvers
  class AuthenticatedResolver < BaseResolver
    def authorized?(*_args)
      raise GraphQL::ExecutionError, 'Authentication required.' unless current_user

      true
    end

    def current_user
      context[:current_user]
    end
  end
end