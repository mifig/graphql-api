# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :registration_create, mutation: Mutations::Authentication::RegistrationCreate
    field :session_create, mutation: Mutations::Authentication::SessionCreate
    field :blog_delete, mutation: Mutations::BlogDelete
    field :blog_update, mutation: Mutations::BlogUpdate
    field :blog_create, mutation: Mutations::BlogCreate
  end
end
