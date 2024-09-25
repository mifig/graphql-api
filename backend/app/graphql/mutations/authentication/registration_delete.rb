# frozen_string_literal: true

module Mutations
  module Authentication
    class RegistrationDelete < AuthenticatedMutation
      description "Deletes a user by ID"
  
      argument :user_id, ID, required: true, loads: Types::Models::UserType
  
      field :user, Types::Models::UserType, null: false
  
      def resolve(user:)
        raise execution_error(message: "Error deleting account.", extensions: user.errors.to_hash) unless user.destroy!
  
        { user: user }
      end

      def authorized?(**args)
        policy = UserPolicy.new(current_user, args[:user])
        raise execution_error(message: 'Not authorized to delete this account.', code: 403, status: :unauthorized) unless super && policy.destroy?
  
        true
      end
    end
  end
end
