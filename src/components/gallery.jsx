import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center" style={{ marginTop: '-80px'}}>
      <div className="container">
        <div className="section-title">
          <h2>The Team</h2>
          <h3>
            Ruffus don´t work alone, know the crew!!.
          </h3>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
        <div className="section-title" style={{ display: 'inline-block', marginRight: '10px', marginTop: '10px' }}>
        <h2>
        ...and there are many more!!! Stay tuned for the arrival of the other gangs!!
        </h2>
        </div>
      </div>
    </div>
  );
};
