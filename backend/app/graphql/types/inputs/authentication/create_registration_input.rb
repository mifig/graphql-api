# frozen_string_literal: true

module Types
  module Inputs
    module Authentication
      class CreateRegistrationInput < Types::BaseInputObject
        description "Attributes for creating a registration (user)."

        argument :first_name, String, required: true
        argument :last_name, String, required: true
        argument :email, String, required: true
        argument :password, String, required: true
      end
    end
  end
end
