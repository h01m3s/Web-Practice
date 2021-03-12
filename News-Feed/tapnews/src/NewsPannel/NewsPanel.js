import './NewsPanel.css';

import React from 'react';
// import NewsCard from '../NewsCard/NewsCard';

class NewsPanel extends React.Component {
  constructor() {
    super();
    this.state = { news: null };
  }

  componentDidMount() {
    this.loadMorenews();
  }

  loadMorenews(e) {
    this.setState({
      news: [
        {
          url: 'https://www.google.com',
          title: 'test1',
          description: 'test description',
          source: 'cnn',
          urlToImage: 'imageUrl',
          digest: 'fdjafda',
          reason: 'Recommend'
        },
        {
          url: 'https://www.google.com',
          title: 'test2',
          description: 'test description',
          source: 'cnn',
          urlToImage: 'imageUrl',
          digest: 'fdjafda',
          reason: 'Hot'
        }
      ]
    });
  }

  renderNews() {
    var news_list = this.state.news.map(news => {
      return (
        <a className="list-group-item" key={news.digest} href="#">
          <NewsCard news={news} />
        </a>
      );
    });

    return (
      <div className="container-fluid">
        <div className="list-group">{news_list}</div>
      </div>
    );
  }

  render() {
    if (this.state.news) {
      return <div>'{this.renderNews()}'</div>;
    } else {
      return (
        <div>
          <div id="msg-app-loading">Loading...</div>
        </div>
      );
    }
  }
}

export default NewsPanel;
