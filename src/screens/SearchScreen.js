import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
function SearchScreen() {
  const [term, setTerm] = useState("");
  const [searchApi, results, errMsg] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />

      <Text>{errMsg ? <Text>{errMsg}</Text> : null}</Text>
      <Text>We have found {results.length} results</Text>
      <ResultsList results={filterResultsByPrice("$")} title="cost effective" />
      <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice("$$$")} title="Big Spender" />
    </View>
  );
}

const styles = StyleSheet.create({});

export default SearchScreen;
