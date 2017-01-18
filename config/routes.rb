Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :restaurants, except: [:new, :edit]
    resources :reviews, only: [:create, :destroy]
    resources :favorites, only: [:create, :destroy]
  end
end
