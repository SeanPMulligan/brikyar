Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # Load main react app home page
  root 'home#index'

  ## Routes here will take precedence

  match '*path', to: 'home#index', via: :get

  namespace :api do
    # API routes for React stuff
  end
end
