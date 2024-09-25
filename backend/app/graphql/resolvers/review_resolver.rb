# frozen_string_literal: true

module Resolvers
  class ReviewResolver < BaseResolver
    description "Get a review by ID."
    
    argument :id, ID, required: true

    type Types::Models::ReviewType, null: true
    
    def resolve(id:)
      ::Review.find_by(id:)
    end
  end
end
