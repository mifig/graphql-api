# frozen_string_literal: true

module Mutations
  module Authentication
    class RegistrationUpdate < AuthenticatedMutation
      description "Updates a user by id"
  
      field :user, Types::Models::UserType, null: false
  
      argument :user_id, ID, required: true, loads: Types::Models::UserType
      argument :data, Types::Inputs::Authentication::UpdateRegistrationInput, required: true
      argument :current_password, String, required: true
  
      def resolve(user:, data:, current_password:)
        raise execution_error(message: "Wrong password.", extensions: user.errors.to_hash) unless user&.authenticate(current_password)
        raise execution_error(message: "Error updating account.", extensions: user.errors.to_hash) unless user.update(**data)
  
        { user: user }
      end

      def authorized?(**args)
        policy = UserPolicy.new(current_user, args[:user])
        raise execution_error(message: 'Not authorized to update this account.', code: 403, status: :unauthorized) unless super && policy.update?
  
        true
      end
    end
  end
end
