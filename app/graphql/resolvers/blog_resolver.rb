# frozen_string_literal: true

module Resolvers
  class BlogResolver < AuthenticatedResolver
    description "Get a blog by ID."
    
    argument :blog_id, ID, required: true, loads: Types::Models::BlogType

    type Types::Models::BlogType, null: true
    
    def resolve(blog:)
      blog
    end

    def authorized?(**args)
      policy = BlogPolicy.new(current_user, args[:blog])
      raise execution_error(message: 'Not authorized to see this blog.', code: 403, status: :unauthorized) unless super && policy.show?
      
      true
    end
  end
end
