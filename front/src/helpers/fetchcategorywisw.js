import React from "react";
import Allapi from "../common/index";

const fetchcategorywise = async (category) => {
  const fetchcat = await fetch(Allapi.categorywise.url, {
    method: Allapi.categorywise.method,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ category: category }),
  });

  const fetchres = await fetchcat.json();

  if (fetchres.success) {
    console.log("fetchres.data is", fetchres);
    return fetchres;
  }
  if (fetchres.error) {
    console.log("error is occured");
  }
};

export default fetchcategorywise;
