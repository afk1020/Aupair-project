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
        #binding.pry
        rawData = JSON.parse(req.body.read)
        newFavorite = Favorite.create(family_id:Family.first.id, aupair_id:rawData['id'])
      
        return [200, { 'Content-Type' => 'application/json' }, [ newFavorite.to_json ]]
      end
      #elsif req.path.match(/Favorite/) 
      collection=[]
      Favorite.all.each do |result|
        hash={
          favorite: result,
          aupair: result.aupair
        }
        collection << hash
      end
      return [200, { 'Content-Type' => 'application/json' }, [ {:favorite => collection}.to_json ]]
    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end
