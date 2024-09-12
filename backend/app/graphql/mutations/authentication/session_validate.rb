module Mutations
  module Authentication
    class SessionValidate < BaseMutation
      description "Validates the JWToken and refreshes for a new one"

      field :user, Types::Models::UserType, null: false
      field :token, String, null: false

      argument :token, String, required: true

      def resolve(token:)
        user = ::Authentication.current_user_from_token(token)
        
        if user
          token = JWT.encode({user_id: user.id, exp: Time.now.to_i + 86_400}, ENV["JWT_SECRET"], 'HS256')

          { 
            user: user,
            token: token
          }
        else
          raise execution_error(message: "Invalid jwtToken.", code: 401, status: :unauthorized)
        end
      end
    end
  end
end