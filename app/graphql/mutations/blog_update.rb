# frozen_string_literal: true

module Mutations
  class BlogUpdate < BaseMutation
    description "Updates a blog by id"

    field :blog, Types::Models::BlogType, null: false

    argument :id, ID, required: true
    argument :data, Types::Inputs::UpdateBlogInput, required: true


    def resolve(id:, data:)
      blog = ::Blog.find(id)
      
      raise execution_error(message: "Error updating blog.", extensions: blog.errors.to_hash) unless blog.update(**data)

      { blog: blog }
    end
  end
end
