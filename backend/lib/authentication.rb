module Authentication  
  def self.current_user(request)
    token = request.headers['Authorization'].to_s.split(' ').last
    return unless token

    current_user_from_token(token)
  end

  def self.current_user_from_token(token)
    decoded_token = validate_token(token)

    begin
      User.find(decoded_token[0]&.dig('user_id'))
    rescue ActiveRecord::RecordNotFound
      nil
    end
  end

  def self.decode(token)
    JWT.decode(token, ENV["JWT_SECRET"], true, algorithm: 'HS256')
  end  

  def self.validate_token(token)
    decode(token)
  rescue JWT::DecodeError
    # Handle token decoding errors
    []
  end
end