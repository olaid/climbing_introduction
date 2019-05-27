Rails.application.routes.draw do
  root to: 'home#index'
  get '/bouldering', to: 'home#index'
  get '/lead', to: 'home#index'
  get '/speed', to: 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
