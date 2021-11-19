Rails.application.routes.draw do
  resources :house_users
  resources :users
  resources :houses

  get '/', to: 'houses#index'

  get '/:id', to: 'houses#show'

  post '/login', to: 'sessions#create'

  delete '/logout', to: 'sessions#destroy'

  get '/search', to: 'houses#search_form', as: 'search'

end