# frozen_string_literal: true

module Mutations
  module Authentication
    class RegistrationCreate < BaseMutation
      description "Registers a new user"

      field :user, Types::Models::UserType, null: false
      field :token, String, null: false

      argument :data, Types::Inputs::Authentication::CreateRegistrationInput, required: true

      def resolve(data:)
        user = ::User.new(**data)
        raise execution_error(message: "Please fill in all inputs.", extensions: user.errors.to_hash) unless user.save

        token = JWT.encode({user_id: user.id, exp: Time.now.to_i + 86_400}, ENV["JWT_SECRET"], 'HS256')

        {
          user: user,
          token: token
        }
      end
    end
  end
end
