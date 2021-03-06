import React from "react";
import VideosItem from "../videos/videos_item";

class tvShows extends React.Component {
  constructor(props) {
    super(props);
    this.changeCarouselIndex = this.changeCarouselIndex.bind(this);
    this.state = {
      action: 0,
      comedy: 0,
      family: 0,
      fantasy: 0,
      crime: 0,
      romance: 0,
      science: 0,
      drama: 0,
    };
  }

  componentDidMount() {
    this.props.allVideos();
  }

  changeCarouselIndex(category, number) {
    const tempState = {};
    if (number === 1) {
      if (this.state[category] === 0) {
        tempState[category] = this.state[category] + 5;
      } else {
        tempState[category] = (this.state[category] + 5) % this.state[category];
      }
      this.setState(tempState);
    } else {
      if (this.state[category] === 0) {
        tempState[category] = this.state[category] + 5;
      } else {
        tempState[category] = (this.state[category] - 5) % this.state[category];
      }
      this.setState(tempState);
    }
  }

  render() {

    // debugger

    return (
      <div className="video-container">
        <div className="genre-section-action">
          <h1 className="genre-title">Action</h1>
          <section className="carouselRow">
            {this.state.action !== 0 ? (
            <div
              className="arrowButton"
              onClick={() => this.changeCarouselIndex("action", -1)}
            >
              {" "}
              <i class="fas fa-chevron-left"></i>
            </div>) :null}

            {this.props.shows.map((video) =>
              video.genre.includes("Action") ? (
                <div className="video-item">
                  <VideosItem
                    key={"action" + parseInt(video.id)}
                    video={video}
                    history={this.props.history}
                    addToMyList={this.props.addToMyList}
                    currentUser={this.props.currentUser}
                    removeFromMyList={this.props.removeFromMyList}
                    requestUserList={this.props.requestUserList}
                    listItems={this.props.listItems}
                  />
                </div>
              ) : null
            )}
            <div
              className="arrowButton"
              onClick={() => this.changeCarouselIndex("action", 1)}
            >
              {" "}
              <i class="fas fa-chevron-right"></i>
            </div>
          </section>
        </div>
        <div className="genre-section">
          <h1 className="genre-title">Comedies</h1>
          <section className="carouselRow">
             {this.state.comedy !== 0 ? (
            <div
              className="arrowButton"
              onClick={() => this.changeCarouselIndex("comedy", -1)}
            >
              {" "}
              <i class="fas fa-chevron-left"></i>
            </div>) : null}
            {this.props.shows.map((video) =>
              video.genre.includes("Comedy") ? (
                <div className="video-item">
                  <VideosItem
                    key={"action" + parseInt(video.id)}
                    video={video}
                    history={this.props.history}
                    addToMyList={this.props.addToMyList}
                    currentUser={this.props.currentUser}
                    removeFromMyList={this.props.removeFromMyList}
                    requestUserList={this.props.requestUserList}
                    listItems={this.props.listItems}
                  />
                </div>
              ) : null
            )}
            <div
              className="arrowButton"
              onClick={() => this.changeCarouselIndex("comedy", 1)}
            >
              {" "}
              <i class="fas fa-chevron-right"></i>
            </div>
          </section>
        </div>
        <div className="genre-section">
          <h1 className="genre-title">Fantasy</h1>
          <section className="carouselRow">
              {this.state.fantasy !== 0 ? (
            <div
              className="arrowButton"
              onClick={() => this.changeCarouselIndex("fantasy", -1)}
            >
              {" "}
              <i class="fas fa-chevron-left"></i>
            </div>) :null}
            {this.props.shows.map((video) =>
              video.genre.includes("Fantasy") ? (
                <div className="video-item">
                  <VideosItem
                    key={"action" + parseInt(video.id)}
                    video={video}
                    history={this.props.history}
                    addToMyList={this.props.addToMyList}
                    currentUser={this.props.currentUser}
                    removeFromMyList={this.props.removeFromMyList}
                    requestUserList={this.props.requestUserList}
                    listItems={this.props.listItems}
                  />
                </div>
              ) : null
            )}
            <div
              className="arrowButton"
              onClick={() => this.changeCarouselIndex("fantasy", 1)}
            >
              {" "}
              <i class="fas fa-chevron-right"></i>
            </div>
          </section>
        </div>
        <div className="genre-section">
          <h1 className="genre-title">Drama</h1>
          <section className="carouselRow">
             {this.state.drama !== 0 ? (
            <div
              className="arrowButton"
              onClick={() => this.changeCarouselIndex("drama", -1)}
            >
              {" "}
              <i class="fas fa-chevron-left"></i>
            </div>) :null}
            {this.props.shows.map((video) =>
              video.genre.includes("Drama") ? (
                <div className="video-item">
                  <VideosItem
                    key={"action" + parseInt(video.id)}
                    video={video}
                    history={this.props.history}
                    addToMyList={this.props.addToMyList}
                    currentUser={this.props.currentUser}
                    removeFromMyList={this.props.removeFromMyList}
                    requestUserList={this.props.requestUserList}
                    listItems={this.props.listItems}
                  />
                </div>
              ) : null
            )}
            <div
              className="arrowButton"
              onClick={() => this.changeCarouselIndex("drama", 1)}
            >
              {" "}
              <i class="fas fa-chevron-right"></i>
            </div>
          </section>
        </div>
        <div className="genre-section">
          <h1 className="genre-title">Crime</h1>
          <section className="carouselRow">
             {this.state.crime !== 0 ? (
            <div
              className="arrowButton"
              onClick={() => this.changeCarouselIndex("crime", -1)}
            >
              {" "}
              <i class="fas fa-chevron-left"></i>
            </div>) :null}
            {this.props.shows.map((video) =>
              video.genre.includes("Crime") ? (
                <div className="video-item">
                  <VideosItem
                    key={"action" + parseInt(video.id)}
                    video={video}
                    history={this.props.history}
                    addToMyList={this.props.addToMyList}
                    currentUser={this.props.currentUser}
                    removeFromMyList={this.props.removeFromMyList}
                    requestUserList={this.props.requestUserList}
                    listItems={this.props.listItems}
                  />
                </div>
              ) : null
            )}
            <div
              className="arrowButton"
              onClick={() => this.changeCarouselIndex("crime", 1)}
            >
              {" "}
              <i class="fas fa-chevron-right"></i>
            </div>
          </section>
        </div>
        <div className="genre-section">
          <h1 className="genre-title">Science Fiction</h1>
          <section className="carouselRow">
             {this.state.science !== 0 ? (
            <div
              className="arrowButton"
              onClick={() => this.changeCarouselIndex("science", -1)}
            >
              {" "}
              <i class="fas fa-chevron-left"></i>
            </div>) :null}
            {this.props.shows.map((video) =>
              video.genre.includes("Science") ? (
                <div className="video-item">
                  <VideosItem
                    key={"action" + parseInt(video.id)}
                    video={video}
                    history={this.props.history}
                    addToMyList={this.props.addToMyList}
                    currentUser={this.props.currentUser}
                    removeFromMyList={this.props.removeFromMyList}
                    requestUserList={this.props.requestUserList}
                    listItems={this.props.listItems}
                  />
                </div>
              ) : null
            )}
            <div
              className="arrowButton"
              onClick={() => this.changeCarouselIndex("science", 1)}
            >
              {" "}
              <i class="fas fa-chevron-right"></i>
            </div>
          </section>
        </div>
        <div className="genre-section">
          <h1 className="genre-title">Romance</h1>
          <section className="carouselRow">
             {this.state.romance !== 0 ? (
            <div
              className="arrowButton"
              onClick={() => this.changeCarouselIndex("romance", -1)}
            >
              {" "}
              <i class="fas fa-chevron-left"></i>
            </div>):null}
            {this.props.shows.map((video) =>
              video.genre.includes("Romance") ? (
                <div className="video-item">
                  <VideosItem
                    key={"action" + parseInt(video.id)}
                    video={video}
                    history={this.props.history}
                    addToMyList={this.props.addToMyList}
                    currentUser={this.props.currentUser}
                    removeFromMyList={this.props.removeFromMyList}
                    requestUserList={this.props.requestUserList}
                    listItems={this.props.listItems}
                  />
                </div>
              ) : null
            )}
            <div
              className="arrowButton"
              onClick={() => this.changeCarouselIndex("romance", 1)}
            >
              {" "}
              <i class="fas fa-chevron-right"></i>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default tvShows;
