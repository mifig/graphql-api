# frozen_string_literal: true

module Mutations
  class CreateBlog < BaseMutation
    # TODO: define arguments
    argument :data, Types::Inputs::BlogInput, required: true
    
    # TODO: define return fields
    field :blog, Types::Models::BlogType
    field :errors, [String], null: false

    # TODO: define resolve method
    def resolve(data:)
      blog = Blog.new(title: data.title, description: data.description, user_id: data.user_id)

      if blog.save
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
