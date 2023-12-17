import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { useState } from "react";

const Testpdf = () => {
  const styles = StyleSheet.create({});
  let data = {
    mainheading: "tcetmumbai.in",
    date: new Date(),
  };
  let [open, setOpen] = useState(false);
  setTimeout(() => {
    setOpen(true);
  }, 1000);
  return (
    <>
      <div>button</div>
      {open ? (
        <PDFViewer width="100%" height="600px">
          <Document>
            <Page size="A4">
              <View style={styles.mainbody}>
                <View>
                  <Text style={styles.mainheading}>{data.mainheading}</Text>
                  <Text style={styles.date}>{data.date}</Text>
                </View>
                <View style={styles.contend}></View>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      ) : (
        <></>
      )}
    </>
  );
};

export default Testpdf;
