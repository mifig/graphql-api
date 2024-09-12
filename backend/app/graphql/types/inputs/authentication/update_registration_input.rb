# frozen_string_literal: true

module Types
  module Inputs
    module Authentication
      class UpdateRegistrationInput < Types::BaseInputObject
        description "Attributes for updating a registration (user)."

        argument :first_name, String, required: false
        argument :last_name, String, required: false
        argument :email, String, required: false
        argument :password, String, required: false
      end
    end
  end
end
