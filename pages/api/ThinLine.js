import axios from 'axios';

class ThinLine {
  constructor(httpClient) {
    this.client = httpClient;
  }

  async mostPopular() {
    const response = await this.constructor.get('', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResult: 15,
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.constructor.get('search', {
      params: {
        part: 'snippet',
        maxResult: 15,
        type: 'video',
        q: query,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}
