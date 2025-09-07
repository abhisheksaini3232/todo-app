import "./App.css";
import { getPosts } from "./api";
import { useEffect, useState } from "react";

function TitleSearch({ data }) {
  const [query, setQuery] = useState("");

  // Filter titles where query is a substring (case-insensitive)
  const filteredTitles = data
    .map((item) => item.title)
    .filter((title) => title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <input
        type="text"
        placeholder="Search titles"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {filteredTitles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);

  return (
    <>
      {data.length > 0 ? (
        <ul>
          {data.map((e) => (
            <li key={e.id}>{e.title}</li>
          ))}
        </ul>
      ) : (
        <p>No Data</p>
      )}

      <TitleSearch data={data} />
    </>
  );
}

export default App;
