# frozen_string_literal: true

module Types
  module Inputs
    class CreateBlogInput < Types::BaseInputObject
      description "Attributes for creating a blog"

      argument :title, String, required: true
      argument :description, String, required: false
      argument :user_id, ID, required: true, loads: Types::Models::UserType
    end
  end
end
