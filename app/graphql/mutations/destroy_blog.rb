# frozen_string_literal: true

module Mutations
  class DestroyBlog < BaseMutation
    # TODO: define return fields
    field :blog, Types::Models::BlogType
    field :errors, [String], null: false

    # TODO: define arguments
    argument :id, ID, required: true

    # TODO: define resolve method
    def resolve(id:)
      blog = Blog.find(id)

      if blog.destroy
        {
          blog: blog,
          errors: []
        }
      else
        {
          blog: nil,
          errors: blog.errors.full_messages
        }
      end
    end
  end
end
