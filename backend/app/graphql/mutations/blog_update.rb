# frozen_string_literal: true

module Mutations
  class BlogUpdate < AuthenticatedMutation
    description "Updates a blog by id"

    argument :blog_id, ID, required: true, loads: Types::Models::BlogType
    argument :data, Types::Inputs::UpdateBlogInput, required: true

    field :blog, Types::Models::BlogType, null: false

    def resolve(blog:, data:)      
      raise execution_error(message: "Error updating blog.", extensions: blog.errors.to_hash) unless blog.update(**data)

      { blog: blog }
    end

    def authorized?(**args)
      policy = BlogPolicy.new(current_user, args[:blog])
      raise execution_error(message: 'Not authorized to update this blog.', code: 403, status: :unauthorized) unless super && policy.update?

      true
    end
  end
end
