# frozen_string_literal: true

module Resolvers
  class UserResolver < BaseResolver
    description "Get a user by ID."
    
    argument :user_id, ID, required: true, loads: Types::Models::UserType

    type Types::Models::UserType, null: true
    
    def resolve(user:)
      user
    end
  end
end
