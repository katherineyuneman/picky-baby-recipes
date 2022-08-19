Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  #custom routes for logging in and out and user signup/me
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  resources :foods do
    resources :recipes, only: [:index]
  end

  resources :recipes do
    resources :ingredients, only: [:index, :destroy, :update]
  end

  # , only: [:index, :create, :destroy, :update, :show]
  #custom route for recipes with specific food
  # get '/foods/:id/recipes', to: 'foods#food_recipes'
  # resources :ingredients, only: [:create]
  

end
