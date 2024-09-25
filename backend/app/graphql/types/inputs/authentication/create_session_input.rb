# frozen_string_literal: true

module Types
  module Inputs
    module Authentication
      class CreateSessionInput < Types::BaseInputObject
        description "Attributes for creating a session."

        argument :email, String, required: true
        argument :password, String, required: true
      end
    end
  end
end
