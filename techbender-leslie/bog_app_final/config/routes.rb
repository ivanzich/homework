Rails.application.routes.draw do
  root to: 'creatures#index'

  resources :creatures
  # resources :creatures with :index is equivalent to adding:
  # get "/creatures", to: "creatures#index"

end
