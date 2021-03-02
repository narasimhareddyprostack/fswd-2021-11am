import React, { Component, Fragment } from "react";

class SelectLoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
    };
  }
  selectCity = (event) => {
    this.setState({
      city: event.target.value,
    });
  };
  render() {
    return (
      <>
        <Fragment>
          <div className="conatiner m-4">
            <div className="row">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header">
                    <h3> Preferred Location</h3>
                    <pre>{JSON.stringify(this.state)}</pre>
                  </div>
                  <div className="card-body">
                    <div className="conatiner">
                      <div className="row">
                        <div className="col-md-4">
                          <input
                            type="radio"
                            onClick={this.selectCity}
                            id="one"
                            name="city"
                            value="bangalore"
                          />
                          <label> Bangalore</label>
                          <br />
                          <input
                            type="radio"
                            onClick={this.selectCity}
                            id="two"
                            name="city"
                            value="panaji"
                          />
                          <label> Panaji</label>
                          <br />
                          <input
                            type="radio"
                            onClick={this.selectCity}
                            id="three"
                            name="city"
                            value="kochi"
                          />
                          <label> Kochi</label>
                        </div>
                        <div className="col-md-8">
                          {this.state.city === "bangalore" ? (
                            <>
                              <div className="card">
                                <div className="card-body bg-primary">
                                  <p>
                                    Bengaluru (also called Bangalore) is the
                                    capital of India's southern Karnataka state.
                                    The center of India's high-tech industry,
                                    the city is also known for its parks and
                                    nightlife.{" "}
                                  </p>
                                </div>
                              </div>
                            </>
                          ) : null}
                          {this.state.city === "kochi" ? (
                            <>
                              <div className="card">
                                <div className="card-body bg-success">
                                  <p>
                                    Bengaluru (also called Bangalore) is the
                                    capital of India's southern Karnataka state.
                                    The center of India's high-tech industry,
                                    the city is also known for its parks and
                                    nightlife.{" "}
                                  </p>
                                </div>
                              </div>
                            </>
                          ) : null}
                          {this.state.city === "panaji" ? (
                            <>
                              <div className="card">
                                <div className="card-body bg-warning">
                                  <p>
                                    Bengaluru (also called Bangalore) is the
                                    capital of India's southern Karnataka state.
                                    The center of India's high-tech industry,
                                    the city is also known for its parks and
                                    nightlife.{" "}
                                  </p>
                                </div>
                              </div>
                            </>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      </>
    );
  }
}

export default SelectLoc;
