function FavoriteListings() {
  this.listings = [];
}

FavoriteListings.prototype.isListingFavorited = function(listing) {
  for (var i = 0; i < this.listings.length; i++) {
    if (this.listings[i].listing_id == listing.listing_id) {
      return true;
    }
  }
  return false;
}

FavoriteListings.prototype.addListing = function(listing) {
  //Check if listings array contains current item, push if not in array already, otherwise return from function
  if(!this.listings.includes(listing))
  {
    this.listings.push(listing);
  }
  else
    return;
  
};

FavoriteListings.prototype.removeListing = function(listing) {

};

FavoriteListings.prototype.getFavorites = function() {
  return this.listings;
}

module.exports = FavoriteListings;