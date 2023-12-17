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
  cont: {
    padding: 10,
  },
  maindiv: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  maincol: {
    fontSize: 16,
    fontWeight: "bold",
  },

  vul: {
    fontSize: 20,
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
  url: {
    color: "blue",
  },
  heading2: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 12,
  },
  heading3: {
    fontSize: 12,
    marginTop: 10,
  },
  keyvalue: {
    display: "flex",
    flexDirection: "row",
  },
  keyvaluekey: {
    marginRight: 20,
  },
  block: {
    marginTop: 5,
  },
});

const Cve = ({ data }) => {
  //console.log(data);
  //console.log(data.Vulns[0]);
  return (
    <View style={styles.cont}>
      <View className="userDetails" style={styles.userDetails}>
        <View className="left" style={styles.left}>
          <Text style={styles.cell} styles={styles.url}>
            ISP
          </Text>
          <Text style={styles.cell}>IP</Text>
          <Text style={styles.cell}>City</Text>
          <Text style={styles.cell}>ASN</Text>
          <Text style={styles.cell}>Country</Text>
          <Text style={styles.cell}>Org</Text>
        </View>
        <View className="right" style={styles.right}>
          <Text style={styles.cell}>{data.isp}</Text>
          <Text style={styles.cell}>{data.ip ? data.ip : "no data"}</Text>
          <Text style={styles.cell}>{data.city ? data.city : "no data"}</Text>
          <Text style={styles.cell}>{data.asn ? data.asn : "no data"}</Text>
          <Text style={styles.cell}>{data.countryCode}</Text>
          <Text style={styles.cell}>{data.org ? data.org : ""}</Text>
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
          <Text>hostnames :-</Text>
        </View>
        <View style={styles.maincol}>
          {data.hostnames
            ? data.hostnames.map((item, index) => {
                return (
                  <View key={index}>
                    <Text>
                      {index + 1}.{item}
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
                      {index + 1}.{item}
                    </Text>
                  </View>
                );
              })
            : ""}
        </View>
      </View>
      <View style={styles.comp}>
        <View style={styles.vul}>
          <Text>Vulnerabilies :-</Text>
        </View>
        <View>
          {data.Vulns[0] ? (
            Object.keys(data.Vulns[0]).map((key, ind) => {
              return (
                <View key={ind}>
                  <View>
                    <Text style={styles.heading2}>
                      {1 + ind}. {key}
                    </Text>
                  </View>
                  <View style={styles.heading3}>
                    <View style={styles.keyvalue}>
                      <View style={styles.keyvaluekey}>
                        <Text>CVSS :</Text>
                      </View>
                      <View>
                        <Text>{data.Vulns[0][key].cvss}</Text>
                      </View>
                    </View>
                    <View style={styles.block}>
                      <Text style={styles.keyvalue}>References :</Text>
                      {data.Vulns[0][key].references ? (
                        data.Vulns[0][key].references.map((val, ind) => {
                          return (
                            <View key={ind}>
                              <Text>
                                {1 + ind}.{val}
                              </Text>
                            </View>
                          );
                        })
                      ) : (
                        <></>
                      )}
                    </View>
                    <View style={styles.block}>
                      <Text>Summary :</Text>
                      <Text>{data.Vulns[0][key].summary}</Text>
                    </View>
                  </View>
                </View>
              );
            })
          ) : (
            <></>
          )}
        </View>
      </View>
    </View>
  );
};

export default Cve;
