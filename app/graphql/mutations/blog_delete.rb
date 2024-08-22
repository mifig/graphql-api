# frozen_string_literal: true

module Mutations
  class BlogDelete < BaseMutation
    description "Deletes a blog by ID"

    field :blog, Types::Models::BlogType, null: false

    argument :id, ID, required: true

    def resolve(id:)
      blog = ::Blog.find(id)

      raise execution_error(message: "Error deleting blog.", extensions: blog.errors.to_hash) unless blog.destroy!

      { blog: blog }
    end
  end
end
