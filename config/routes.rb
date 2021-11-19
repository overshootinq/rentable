Rails.application.routes.draw do
  resources :house_users
  resources :users
  resources :houses
    
    
    # get show all 
  get '/', to: 'houses#index'
    
  get '/:id', to: 'houses#show'
    
  get 'sessions/create'

  get 'sessions/destroy'

  post '/login', to: 'users#loggingin', as: 'loggingin'

  delete '/logout', to: 'users#logout', as: 'logout'



  get '/search', to: 'houses#search_form', as: 'search'



  # get '/restaurants', to: 'restaurants#index'
  # get '/restaurants/:id', to: 'restaurants#show'
  # delete '/restaurants/:id', to: 'restaurants#destroy'

  # get '/pizzas', to: 'pizzas#index'

  # post '/restaurants_pizzas', to: 'restaurant_pizzas#create'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html




# post '/login' to: 'users#login'
# delete '/login' to: 'users#logout'

end