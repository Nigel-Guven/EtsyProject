var currency_symbols = {
  "USD": '$', // United States Dollar (USD)
  "CAD": '$', // Canadian Dollar (CAD)
  "EUR": '€', // Euro (EUR)
  "GBP": '£', // British Pound (GBP)
  "AUD": '$', // Australian Dollar (AUD)
  "JPY": '¥', // Japanese Yen (JPY)
  "CZK": 'Kč', // Czech Koruna (CZK)
  "DKK": 'kr', // Danish Krone (DKK)
  "HKD": '$', // Hong Kong Dollar (HKD)
  "HUF": 'Ft', // Hungarian Forint (HUF)
  "ILS": '₪', // Israeli Shekel (ILS)
  "MYR": 'RM', // Malaysian Ringgit (MYR)
  "MXN": '$', // Mexican Peso (MXN)
  "NZD": '$', // New Zealand Dollar (NZD)
  "NOK": 'kr', // Norwegian Krone (NOK)
  "PHP": '₱', // Philippine Peso (PHP)
  "SGD": '$', // Singapore Dollar (SGD)
  "SEK": 'kr', // Swedish Krona (SEK)
  "CHF": '', // Swiss Franc (CHF)
  "THB": '฿', // Thai Baht (THB)
  "TWD": 'NT$', // Taiwan New Dollar (TWD)
  "PLN": 'zł', // Polish Zloty (PLN)
  "BRL": 'R$', // Brazilian Real (BRL)
};

function Listing(listing_id, title, shop_name, image, price, currency, num_favorers) {
  this.listing_id = listing_id;
  this.title = title;
  this.image = image;
  this.price = price;
  this.currency = currency;
  this.shop_name = shop_name;
  this.num_favorers = num_favorers
  this.is_favorite = false;
}

Listing.fromJSON = function(json) {
  return new Listing(
    json.listing_id,
    json.title,
    json.Shop.shop_name,
    json.Images[0].url_170x135,
    parseFloat(json.price),
    json.currency_code,
    json.num_favorers
  );
}



Listing.prototype.formatPrice = function() {
  
  // 1. Retrieve the currency symbol related to the currency code, then return the concatenated string object in correct format.
  const currency_specific_symbol = currency_symbols.this.currency;
  const itemPrice = this.price.toFixed(2);
  const itemCurrency = this.currency;

  return currency_specific_symbol + itemPrice + " " + itemCurrency;
};

Listing.prototype.setIsFavorite = function(is_favorite) {
  this.is_favorite = is_favorite;
}

module.exports = Listing;