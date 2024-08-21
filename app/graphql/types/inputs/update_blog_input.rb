# frozen_string_literal: true

module Types
  module Inputs
    class UpdateBlogInput < Types::BaseInputObject
      description "Attributes for updating a blog"

      argument :title, String, required: false
      argument :description, String, required: false
      argument :user_id, ID, required: false
    end
  end
end
