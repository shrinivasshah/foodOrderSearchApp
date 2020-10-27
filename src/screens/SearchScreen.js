import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
function SearchScreen() {
  const [term, setTerm] = useState("");
  const [searchApi, results, errMsg] = useResults();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />

      <Text>{errMsg ? <Text>{errMsg}</Text> : null}</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default SearchScreen;
