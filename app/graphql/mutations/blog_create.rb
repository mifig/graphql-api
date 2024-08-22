# frozen_string_literal: true

module Mutations
  class BlogCreate < BaseMutation
    description "Creates a new blog"

    field :blog, Types::Models::BlogType, null: false

    argument :data, Types::Inputs::CreateBlogInput, required: true

    def resolve(data:)
      blog = ::Blog.new(**data)

      raise execution_error(message: "Error creating blog.", extensions: blog.errors.to_hash) unless blog.save
      
      { blog: blog }
    end
  end
end
