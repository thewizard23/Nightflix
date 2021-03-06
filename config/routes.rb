Rails.application.routes.draw do
   namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] do 
      resources :mylist, only: [:index,:create,:destroy]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :videos, only: [:index, :show]
    resources :search, only: [:index]
  end
   root "static_pages#root"
end
