AjaxDownload::Application.routes.draw do
  root 'examples#index'
  get '/download/' => 'examples#download', as: :download
end
