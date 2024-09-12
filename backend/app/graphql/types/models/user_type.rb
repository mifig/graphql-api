# frozen_string_literal: true

module Types
  module Models
    class UserType < Types::BaseObject
      field :id, ID, null: false
      field :first_name, String
      field :last_name, String
      field :full_name, String
      field :email, String
      field :blogs, [BlogType]
      field :reviews, [ReviewType]
      field :created_at, GraphQL::Types::ISO8601DateTime, null: false
      field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    end
  end
end
