# frozen_string_literal: true

module Resolvers
  class UserResolver < BaseResolver
    description "Get a user by ID."
    
    argument :id, ID, required: true

    type Types::Models::UserType, null: true
    
    def resolve(id:)
      ::User.find_by(id:)
    end
  end
end
