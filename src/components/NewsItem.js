import React from "react";

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;
    return (
      <div>
        <div className="my-3">
          <div
            className="card"
            style={{
              backgroundColor: "#ebe7f4",
              boxShadow: "rgba(17, 12, 46, 0.25) 0px 18px 30px 0px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: "0",
              }}
            >
              <span
                className="badge rounded-pill"
                style={{ backgroundColor: "#715499" }}
              >
                {source}
              </span>
            </div>
            <img
              src={
                imageUrl
                  ? imageUrl
                  : "https://www.gale.com/binaries/content/gallery/gale-us-en/banners/databases/gale-in-context/databases_gale_in_context_global_issues_k12_banner.jpg"
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text">
                <small className="text-muted">
                  By {author ? author : "Unknown"} on{" "}
                  {new Date(date).toGMTString()}
                </small>
              </p>
              <a
                rel="noreferrer"
                href={newsUrl}
                target="_blank"
                className="btn btn-sm "
                style={{ backgroundColor: "#FC5607", color: "white" }}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
