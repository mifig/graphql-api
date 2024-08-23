# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :registration_update, mutation: Mutations::Authentication::RegistrationUpdate
    field :registration_delete, mutation: Mutations::Authentication::RegistrationDelete
    field :registration_create, mutation: Mutations::Authentication::RegistrationCreate
    field :session_create, mutation: Mutations::Authentication::SessionCreate
    field :blog_delete, mutation: Mutations::BlogDelete
    field :blog_update, mutation: Mutations::BlogUpdate
    field :blog_create, mutation: Mutations::BlogCreate
  end
end
