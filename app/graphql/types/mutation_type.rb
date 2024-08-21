# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :destroy_blog, mutation: Mutations::DestroyBlog
    field :create_blog, mutation: Mutations::CreateBlog
  end
end
