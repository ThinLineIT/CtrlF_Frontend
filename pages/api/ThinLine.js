import axios from 'axios';

class ThinLine {
  constructor(httpClient) {
    this.client = httpClient;
  }

  async mostPopular() {
    const response = await this.constructor.get('', {
      params: {},
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.constructor.get('search', {
      params: {
        q: query,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id,
    }));
  }
}
