class HouseSerializer < ActiveModel::Serializer
  attributes :id, :property_type, :address, :beds, :baths, :price, :contact_info, :img_url
end
