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

const columnCount = 3;
const columnWidth = 100 / columnCount;

const styles = StyleSheet.create({
  cont: {
    padding: 10,
  },
  maindiv: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  maincol: {},
  column: {
    width: `${columnWidth}%`,
    marginBottom: 10,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    border: "1px solid black",
    borderRadius: "50%",
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: "#0C0404",
    color: "#FDFCFA",
  },
  colfont: {
    fontSize: 12,
  },
  vul: {
    fontSize: 18,
    fontWeight: 400,
  },
  comp: {
    marginTop: 15,
  },
  userDetails: {
    display: "flex",
    fontSize: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  left: {
    width: "50%",
  },
  right: {
    width: "50%",
  },
  cell: {
    border: "1px solid black",
    padding: 5,
  },
});

const Cve = ({ data }) => {
  console.log(data);
  let [cvedata, setcvedata] = useState([]);
  let modify = [];
  //   data.Vulns.map(async (val, index) => {
  //     let url = `https://cve.circl.lu/api/cve/${val}`;
  //     let response = await axios.get(url);
  //     console.log(response);
  //   });
  let fun = async () => {
    let response = await axios.get(
      "https://cve.circl.lu/api/cve/CVE-2018-15473"
    );
    console.log(response);
  };
  useEffect(() => {
    fun();
  }, []);
  return (
    <View style={styles.cont}>
      <View className="userDetails" style={styles.userDetails}>
        <View className="left" style={styles.left}>
          <Text style={styles.cell}>ISP</Text>
          <Text style={styles.cell}>IP</Text>
          <Text style={styles.cell}>City</Text>
          <Text style={styles.cell}>ASN</Text>
          <Text style={styles.cell}>Country</Text>
          <Text style={styles.cell}>Org</Text>
        </View>
        <View className="right" style={styles.right}>
          <Text style={styles.cell}>{data.isp}</Text>
          <Text style={styles.cell}>{data.ip}</Text>
          <Text style={styles.cell}>{data.city}</Text>
          <Text style={styles.cell}>{data.asn}</Text>
          <Text style={styles.cell}>{data.countryCode}</Text>
          <Text style={styles.cell}>{data.org}</Text>
        </View>
      </View>
      <View style={styles.comp}>
        <View style={styles.vul}>
          <Text>Ports :-</Text>
        </View>
        <View style={styles.maindiv}>
          <Text> {data.ports ? data.ports.join(",") : ""}</Text>
        </View>
      </View>

      <View style={styles.comp}>
        <View style={styles.vul}>
          <Text>Vulnerabilies :-</Text>
        </View>
        <View style={styles.maindiv}>
          {data.Vulns
            ? data.Vulns.map((item, index) => (
                <View key={index} style={styles.column}>
                  <Text style={styles.colfont}>{item}</Text>
                </View>
              ))
            : ""}
        </View>
      </View>
      <View style={styles.comp}>
        <View style={styles.vul}>
          <Text>hostnames :-</Text>
        </View>
        <View style={styles.maincol}>
          {data.hostnames
            ? data.hostnames.map((item, index) => {
                return (
                  <View key={index}>
                    <Text>
                      {index + 1}. {item}
                    </Text>
                  </View>
                );
              })
            : ""}
        </View>
      </View>
      <View style={styles.comp}>
        <View style={styles.vul}>
          <Text>Domains :-</Text>
        </View>
        <View style={styles.maincol}>
          {data.domains
            ? data.domains.map((item, index) => {
                return (
                  <View key={index}>
                    <Text>
                      {index + 1}. {item}
                    </Text>
                  </View>
                );
              })
            : ""}
        </View>
      </View>
    </View>
  );
};

export default Cve;
