class Search {
  constructor(n) {
    this.search = n;
  }

  async search(query) {
    const response = await this.search.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
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

export default CtrlF;
