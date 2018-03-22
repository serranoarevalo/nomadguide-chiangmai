import React from "react";
import PropTypes from "prop-types";
import Visa from "content/Visa";
import ATMS from "content/ATMS";
import Weather from "content/Weather";
import Airport from "content/Airport";
import Simcard from "content/Simcard";
import Uber from "content/Uber";

const ArticlePresenter = ({ title }) => {
  switch (title.toLowerCase()) {
    case "비자":
      return <Visa />;
    case "환전":
      return <ATMS />;
    case "날씨":
      return <Weather />;
    case "도착 직후":
      return <Airport />;
    case "심카드":
      return <Simcard />;
    case "우버 - 그렙":
      return <Uber />;
    default:
      break;
  }
};

ArticlePresenter.propTypes = {
  title: PropTypes.oneOf([
    "비자",
    "환전",
    "날씨",
    "도착 직후",
    "심카드",
    "우버 - 그렙"
  ])
};

export default ArticlePresenter;
