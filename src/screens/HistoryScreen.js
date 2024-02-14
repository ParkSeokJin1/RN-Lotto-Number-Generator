import React, { useCallback, useState } from "react";
import { FlatList, View } from "react-native";
import Header from "../components/Header/Header";
import Typography from "../components/Typography";
import { LottoNumberView } from "../components/LottoNumberView";
import { useSelector } from "react-redux";

export const HistoryListScreen = (props) => {
  const history = useSelector((state) => state.numbers.history);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="HISTORY"></Header.Title>
      </Header>

      <FlatList
        style={{ flex: 1 }}
        data={history}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 12,
                marginHorizontal: 24,
                height: 120,
                backgroundColor: "white",
              }}
            >
              <Typography fontSize={16}>
                {item.date.getFullYear()}, {item.date.getMonth()},
                {item.date.getDay()}
                <LottoNumberView numbers={item.numbers} />
              </Typography>
            </View>
          );
        }}
        contentContainerStyle={{
          paddingTop: 24,
          paddingBottom: 24,
        }}
      />
    </View>
  );
};
