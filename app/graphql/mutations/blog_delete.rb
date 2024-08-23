# frozen_string_literal: true

module Mutations
  class BlogDelete < AuthenticatedMutation
    description "Deletes a blog by ID"
    
    argument :blog_id, ID, required: true, loads: Types::Models::BlogType

    field :blog, Types::Models::BlogType, null: false

    def resolve(blog:)
      raise execution_error(message: "Error deleting blog.", extensions: blog.errors.to_hash) unless blog.destroy!

      { blog: blog }
    end

    def authorized?(**args)
      policy = BlogPolicy.new(current_user, args[:blog])
      raise execution_error(message: 'Not authorized to delete this blog.', code: 403, status: :unauthorized) unless super && policy.destroy?

      true
    end
  end
end
