class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  has_many(
    :restaurants,
    class_name: :Restaurant,
    foreign_key: :owner_id,
    primary_key: :id,
    dependent: :destroy
  )

  has_many(
    :reviews,
    class_name: :Review,
    foreign_key: :author_id,
    primary_key: :id,
    dependent: :destroy
  )

  has_many(
    :favorites,
    class_name: :Favorite,
    foreign_key: :user_id,
    primary_key: :id,
    dependent: :destroy
  )

  has_many(
    :favorite_restaurants,
    through: :favorites,
    source: :restaurant
  )

  has_many(
    :reservations,
    class_name: :Reservation,
    foreign_key: :user_id,
    primary_key: :id,
    dependent: :destroy
  )

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
