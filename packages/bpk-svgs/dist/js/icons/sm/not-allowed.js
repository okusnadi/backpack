import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M9 2C5.1 2 2 5.1 2 9s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zM4 9c0-1 .3-2 .8-2.8l6.9 6.9c-.7.6-1.7.9-2.7.9-2.8 0-5-2.2-5-5zm9.2 2.8l-7-7C7 4.3 8 4 9 4c2.8 0 5 2.2 5 5 0 1-.3 2-.8 2.8z" /></svg>;
  }

}