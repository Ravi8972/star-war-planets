import React from 'react';
import ReactLoading from "react-loading";

const PageLoader = () => {
  return (
    <div>
    <ReactLoading
                type="spinningBubbles"
                color="#0000FF"
                height={100}
                width={50}
            />
        </div>
  )
}

export default PageLoader