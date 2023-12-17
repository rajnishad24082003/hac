import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import Cve from "./Cve";
import Running from "./Running";

const styles = StyleSheet.create({
  mainheading: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "extrabold",
    textTransform: "uppercase",
    marginVertical: 10,
  },
  mainbody: {
    flexDirection: "row",
    margin: 15,
  },
  column: {
    width: "50%",
  },
  text: {
    fontSize: 12,
  },
});

const Compdf = ({ pdfcontent, orderval }) => {
  return (
    <PDFViewer width="100%" height="600px">
      <Document>
        <Page size="A4">
          {/* <View>
            <Text style={styles.mainheading}>tcetmumbai.in</Text>
          </View>
          <View style={styles.mainbody}>
            <View style={styles.column}>
              <Text style={styles.text}>{pdfcontent}</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.text}>{pdfcontent}</Text>
            </View>
          </View> */}
          <View>
            <Text style={styles.mainheading}>{pdfcontent.domain}</Text>
          </View>
          {orderval.ref === "Public Reconnaissance" ? (
            <View>
              <Cve data={pdfcontent.ShodanData}></Cve>
            </View>
          ) : (
            <View></View>
          )}
          {orderval.ref === "Running Services" ? (
            <View>
              <Running data={pdfcontent.postss}></Running>
            </View>
          ) : (
            <View></View>
          )}
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Compdf;
