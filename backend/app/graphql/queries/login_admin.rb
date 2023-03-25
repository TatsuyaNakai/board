module Queries
  class LoginAdmin < GraphQL::Schema::Resolver
    type Types::LoginAdminType, null: false

    # argument
    argument :email,          String, required: true
    argument :password,       String, required: true

    API_MESSAGE = 'パスワードが間違っています、または、登録されていないEメールです。'

    # resolver
    def resolve(email:, password:)
      return create_errors('email') if email.blank? || password.blank?

      admin = Admin.find_by(email: email)
      return create_errors('password') if admin.blank? || !admin.valid_password?(password)

      { admin: admin, result: true }
    end

    private

    def create_errors(attribute)
      admin_errors = [{ attribute: attribute, messages: [API_MESSAGE] }]
      { result: false, errors: admin_errors, full_messages: API_MESSAGE }
    end
  end
end
