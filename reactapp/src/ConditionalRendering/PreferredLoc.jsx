import React, { Component, Fragment } from "react";

class PreferredLoc extends Component {
  state = {
    bangalore: false,
    kochi: false,
    panaji: false,
  };
  changeStateBangalore = () => {
    this.setState({ bangalore: !this.state.bangalore });
  };
  changeStatekochi = () => {
    this.setState({ kochi: !this.state.kochi });
  };
  changeStatepanaji = () => {
    this.setState({ panaji: !this.state.panaji });
  };
  render() {
    return (
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
                          type="checkbox"
                          onClick={this.changeStateBangalore}
                          id="one"
                        />
                        <label> Bangalore</label>
                        <br />
                        <input
                          type="checkbox"
                          onClick={this.changeStatepanaji}
                          id="two"
                        />
                        <label> Panaji</label>
                        <br />
                        <input
                          type="checkbox"
                          onClick={this.changeStatekochi}
                          id="three"
                        />
                        <label> Kochi</label>
                      </div>
                      <div className="col-md-8">
                        {this.state.bangalore ? (
                          <>
                            <div className="card">
                              <div className="card-body bg-primary">
                                <p>
                                  Bengaluru (also called Bangalore) is the
                                  capital of India's southern Karnataka state.
                                  The center of India's high-tech industry, the
                                  city is also known for its parks and
                                  nightlife.{" "}
                                </p>
                              </div>
                            </div>
                          </>
                        ) : null}
                        {this.state.kochi ? (
                          <>
                            <div className="card">
                              <div className="card-body bg-success">
                                <p>
                                  Bengaluru (also called Bangalore) is the
                                  capital of India's southern Karnataka state.
                                  The center of India's high-tech industry, the
                                  city is also known for its parks and
                                  nightlife.{" "}
                                </p>
                              </div>
                            </div>
                          </>
                        ) : null}
                        {this.state.panaji ? (
                          <>
                            <div className="card">
                              <div className="card-body bg-warning">
                                <p>
                                  Bengaluru (also called Bangalore) is the
                                  capital of India's southern Karnataka state.
                                  The center of India's high-tech industry, the
                                  city is also known for its parks and
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
    );
  }
}

export default PreferredLoc;
