const axios = require("axios");
const Gift = require("./Gift");

class GiftList {
  constructor(queries) {
    this.queries = queries;
    this.list = [];
  }

  addGift(gift) {
    // adds gift to list after checking if instance of Gift class
    if (gift.constructor.name === "Gift") {
      this.list.push(gift);
    }
  }

  getGiftsFromQueries() {
    // call etsy API here

    const promises = [];

    this.queries.forEach(query => {
      promises.push(
        axios.get("https://openapi.etsy.com/v2/listings/active", {
          params: {
            api_key: "0cybldlljac0tj4lsic7bnkb",
            keywords: query,
            limit: 5
          }
        })
      );
    });

    return Promise.all(promises).then(data => {
      data.forEach(({ data }) => {
        const allResults = data.results.map(result => result);

        for (let i = 0; i < 2; i++) {
          const random =
            allResults[Math.floor(Math.random() * allResults.length)];
          const newGift = new Gift(
            random.title,
            random.description,
            random.price
          );
          this.addGift(newGift);
        }
      });
    });
  }
}

module.exports = GiftList;
