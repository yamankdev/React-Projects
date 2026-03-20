import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import Loadingpage from "../pages/LoadingPage";

const ApiContext = createContext();

function ApiDataProvider({ children }) {
  // optional loading state
  const [loading, setLoading] = useState(true);

  // optional error state
  const [error, setError] = useState(null);

  // state to store API response
  const [data, setData] = useState({
    products: [],
    categories: [],
    brands: [],
    banners: [],
    offers: [],
    monthlyPromotions: [],
  });

  // URL to get the data for the project
  const url =
    "https://raw.githubusercontent.com/yamankdev/mock-data-hub/refs/heads/main/data.json";

  // Fetching data from the URL
  const fetchedApiData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data); // store object in state
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchedApiData();
  }, []);

  if (loading) return <Loadingpage />;
  if (error) return <p>Error: {error}</p>;

  return (
    <ApiContext.Provider value={{ data, loading, error }}>
      {children}
    </ApiContext.Provider>
  );
}

// Hook to use ApiData in the project
export const useApiData = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApiData must be used inside ApiDataProvider");
  }
  return context;
};

export default ApiDataProvider;
