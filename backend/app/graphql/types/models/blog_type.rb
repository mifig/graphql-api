# frozen_string_literal: true

module Types
  module Models
    class BlogType < Types::BaseObject
      field :id, ID, null: false
      field :title, String
      field :description, String
      field :user, UserType, null: false
      field :reviews, [ReviewType]
      field :created_at, GraphQL::Types::ISO8601DateTime, null: false
      field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    end
  end
end
