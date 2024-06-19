import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <div>
        <div className="my-3">
          <div className="card">
            <img
              src={
                !imageUrl
                  ? "https://wsbt.com/resources/media/e2800bcd-3539-49f9-aef5-67b61c4e600e-large16x9_AP24153542179779.jpg"
                  : imageUrl
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title.slice(0, 45)}...</h5>
              <p className="card-text">{description.slice(0, 150)}...</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  By {!author ? "Unknown" : author} on{" "}
                  {new Date(date).toGMTString()}
                </small>
              </p>
              <a
                rel="noreferrer"
                href={newsUrl}
                target="_blank"
                className="btn btn-sm btn-dark"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
