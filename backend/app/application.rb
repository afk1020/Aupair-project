require 'pry'
require 'json'

class Application 

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/Aupair/) 
      return [200, { 'Content-Type' => 'application/json' }, [ {:aupair => Aupair.all}.to_json ]]

    elsif req.path.match(/Family/) 
      return [200, { 'Content-Type' => 'application/json' }, [ {:family => Family.all}.to_json ]]
    
    elsif req.path.match(/Listing/) 
      return [200, { 'Content-Type' => 'application/json' }, [ {:listing => Listing.all}.to_json ]]

    elsif req.path.match(/Favorite/) 
      if req.post? 
        rawData = JSON.parse(req.body.read)
        newFavorite = Favorite.create(name:rawData['favorite'])
        return [200, { 'Content-Type' => 'application/json' }, [ newFavorite.to_json ]]
      end
      return [200, { 'Content-Type' => 'application/json' }, [ {:favorite => Favorite.all}.to_json ]]
    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end
