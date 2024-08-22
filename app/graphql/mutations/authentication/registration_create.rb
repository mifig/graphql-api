# frozen_string_literal: true

module Mutations
  module Authentication
    class RegistrationCreate < BaseMutation
      description "Registers a new user"

      field :user, Types::Models::UserType, null: false

      argument :data, Types::Inputs::Authentication::CreateRegistrationInput, required: true

      def resolve(data:)
        user = ::User.new(**data)
        raise GraphQL::ExecutionError.new "Error creating user", extensions: user.errors.to_hash unless user.save

        { user: user }
      end
    end
  end
end
