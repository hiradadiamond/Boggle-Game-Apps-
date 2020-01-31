Rails.application.routes.draw do

  root 'login_screen#index'
  namespace :api do
     namespace :v1 do
       resources :boggle, only: [:index]
     end
   end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
