import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
// import { ScrollView } from "react-native-gesture-handler";
function SearchScreen() {
  const [term, setTerm] = useState("");
  const [searchApi, results, errMsg] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>{errMsg ? <Text>{errMsg}</Text> : null}</Text>
      <ResultsList results={filterResultsByPrice("$")} title="cost effective" />
      <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice("$$$")} title="Big Spender" />
    </>
  );
}

const styles = StyleSheet.create({});

export default SearchScreen;
