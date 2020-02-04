Rails.application.routes.draw do

  root 'login_screen#index'
  namespace :api do
     namespace :v1 do
       resources :boggle, only: [:index, :show, :check]
     end
   end
end
