import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import axios from "axios";
import { useState, useEffect } from "react";

const styles = StyleSheet.create({
  table: {
    width: "100%",
    border: "1px solid black",
    marginTop: 10,
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: "1px solid black",
    alignItems: "center",
    height: 30,
  },
  tableCell: {
    flex: 1,
    padding: 8,
  },
});

const Running = ({ data }) => {
  console.log(data);
  return (
    <>
      {data ? (
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>Sr No.</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Port</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Service</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Version</Text>
            </View>
          </View>

          {data.map((row, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text>{index + 1}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{row.port}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{row.service}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{row.version}</Text>
              </View>
            </View>
          ))}
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default Running;
