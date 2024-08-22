# frozen_string_literal: true

module Mutations
  module Authentication
    class SessionCreate < BaseMutation
      description "Creates a session for a user and returns a JWToken representing that session"

      field :user, Types::Models::UserType, null: false
      field :token, String, null: false

      argument :data, Types::Inputs::Authentication::CreateSessionInput, required: true

      def resolve(data:)
        user = ::User.find_by(email: data.email)

        if user&.authenticate(data.password)
          token = JWT.encode({user_id: user.id}, ENV["JWT_SECRET"], 'HS256')

          { 
            user: user,
            token: token
          }
        else
          raise GraphQL::ExecutionError.new "Invalid credentials."
        end
      end
    end
  end
end
