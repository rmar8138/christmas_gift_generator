const axios = require("axios");
const Gift = require("./Gift");
const { randomDistinctNumbers } = require("./utility_service");

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

  async getGiftsFromQueries() {
    const promises = [];

    // call etsy api for each query and add promise to array
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

    try {
      let responses = await Promise.all(promises);

      for (let response of responses) {
        const { results } = response.data;
        const indexes = randomDistinctNumbers(results.length);

        this.createGiftsFromResultsIndexes(indexes, results);
      }
    } catch (error) {
      console.log(error);
    }
  }

  createGiftsFromResultsIndexes(indexes, results) {
    for (let index of indexes) {
      const { title, description, price } = results[index];

      this.addGift(new Gift(title, description, price));
    }
  }
}

module.exports = GiftList;
