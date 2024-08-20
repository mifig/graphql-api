# frozen_string_literal: true

module Resolvers
  class BlogsResolver < BaseResolver
    description "Get all blogs."

    type [Types::Models::BlogType], null: false

    def resolve
      ::Blog.all
    end
  end
end
