# frozen_string_literal: true

module Resolvers
  class BlogsResolver < AuthenticatedResolver
    description "Get all blogs."

    type [Types::Models::BlogType], null: false

    def resolve
      current_user.blogs
    end
  end
end
