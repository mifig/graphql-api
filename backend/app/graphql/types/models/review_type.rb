# frozen_string_literal: true

module Types
  module Models
    class ReviewType < Types::BaseObject
      field :id, ID, null: false
      field :content, String
      field :user, UserType, null: false
      field :blog, BlogType, null: false
      field :created_at, GraphQL::Types::ISO8601DateTime, null: false
      field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    end
  end
end
