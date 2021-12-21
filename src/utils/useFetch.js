class FetchIssue {
  issue;
  constructor(issue) {
    this.issue = issue;
  }

  _BASE_URL = `http://testdeploy-dev.ap-northeast-2.elasticbeanstalk.com/api/${this.issue}/`;

  static fetchData() {}
}

const fetchNote = new FetchIssue('notes');

class FetchNote extends FetchIssue {
  _axios;
  constructor(issue, _BASE_URL, method) {
    super(issue, _BASE_URL);
    this._axios = { url: _BASE_URL, method: method };
  }
}

const fetchNotePost = new FetchNote('notes', 'post');
console.log(fetchNotePost);

class FetchTopic extends FetchIssue {}
class FetchPage extends FetchIssue {}

class FetchRenameIssue extends FetchIssue {}
