# frozen_string_literal: true

module Mutations
  class BlogCreate < AuthenticatedMutation
    description "Creates a new blog"

    field :blog, Types::Models::BlogType, null: false

    argument :data, Types::Inputs::CreateBlogInput, required: true

    def resolve(data:)
      blog = ::Blog.new(**data)
      blog.user = current_user

      raise execution_error(message: "Error creating blog.", extensions: blog.errors.to_hash) unless blog.save
      
      { blog: blog }
    end

    def authorized?(**args)
      policy = BlogPolicy.new(current_user, nil)
      raise execution_error(message: 'Not authorized to create a blog.', code: 403, status: :unauthorized) unless super && policy.create?

      true
    end
  end
end
