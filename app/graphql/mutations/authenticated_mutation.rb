module Mutations
  class AuthenticatedMutation < BaseMutation
    def authorized?(*_args)
      raise execution_error(message: 'Authentication required.', code: 401, status: :unauthorized) unless current_user

      true
    end

    def current_user
      context[:current_user]
    end
  end
end