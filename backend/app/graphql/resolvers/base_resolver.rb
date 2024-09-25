module Resolvers
  class BaseResolver < GraphQL::Schema::Resolver
    include ExecutionErrorResponder
  end
end
