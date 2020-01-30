require 'test_helper'

class LoginScreenControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get login_screen_index_url
    assert_response :success
  end

end
