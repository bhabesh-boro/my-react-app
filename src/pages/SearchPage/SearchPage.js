import React, { useState } from "react";
import axios from "axios";

import Card from "../../components/Card/Card";
import List from "../../components/List/List";
import Search from "../../components/Search/Search";

import { baseUrl, axiosHeaders } from "../../utils/constants";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSubmitSuccess = (res) => {
    // Data validation before setting searchResult
    if (res && res.data && res.data.Search instanceof Array) {
      setSearchResult(res.data.Search);
    }
  };

  const onSubmit = (searchTerm) => {
    setLoading(true);
    const uri = `${baseUrl}search?title=${searchTerm}`;
    axios
      .get(uri, axiosHeaders)
      .then((res) => {
        onSubmitSuccess(res);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Search value={searchTerm} onChange={setSearchTerm} onSubmit={onSubmit} />
      <br />
      <div className="container">
        {loading && `Searching movies: ${searchTerm}`}
      </div>
      {!loading && <List elements={searchResult} component={Card} />}
    </>
  );
}
