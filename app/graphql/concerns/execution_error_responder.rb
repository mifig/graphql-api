module ExecutionErrorResponder
  extend ActiveSupport::Concern

  private

  def execution_error(message: nil, extensions: nil, status: :unprocessable_entity, code: 422)
    GraphQL::ExecutionError.new(message, extensions: extensions, options: { status: status, code: code})
  end
end