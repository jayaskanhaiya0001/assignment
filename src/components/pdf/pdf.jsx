import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 12, fontFamily: 'Helvetica' },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#0E6153' },
  company: { textAlign: 'right', fontSize: 14 },
  section: { marginBottom: 20 },
  line: { borderBottomWidth: 1, borderBottomColor: '#0E6153', marginVertical: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  table: { display: 'table', width: '100%', marginTop: 10, borderWidth: 1, borderColor: '#0E6153' },
  tableRow: { flexDirection: 'row', backgroundColor: '#F0F0F0', borderBottomWidth: 1, borderColor: '#0E6153' },
  tableCol: { width: '25%', padding: 8, textAlign: 'center' },
  text: { marginBottom: 5 },
  footer: { textAlign: 'center', fontSize: 10, marginTop: 30 },
});

const InvoicePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>INVOICE</Text>
        <Text style={styles.company}>Marble Beauty & Spa</Text>
      </View>

      <View style={styles.section}>
        <Text>Bill to:</Text>
        <Text>Business Company 123</Text>
        <Text>Grand Avenue, 29102</Text>
        <Text>Country +00 000 000</Text>
      </View>

      <View style={styles.section}>
        <Text>Invoice #12345</Text>
        <Text>Date: 00/00/00</Text>
      </View>

      <View style={styles.line} />

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableCol}>Description</Text>
          <Text style={styles.tableCol}>Price</Text>
          <Text style={styles.tableCol}>Qty</Text>
          <Text style={styles.tableCol}>Total</Text>
        </View>
        {[...Array(5)].map((_, index) => (
          <View style={styles.tableRow} key={index}>
            <Text style={styles.tableCol}>Service description</Text>
            <Text style={styles.tableCol}>00,00€</Text>
            <Text style={styles.tableCol}>1</Text>
            <Text style={styles.tableCol}>00,00€</Text>
          </View>
        ))}
      </View>

      <View style={styles.line} />

      <View style={styles.section}>
        <Text>Payment Method:</Text>
        <Text>By Bank: London State Bank LNS-00</Text>
      </View>

      <View style={styles.section}>
        <Text>Terms & Conditions:</Text>
        <Text>The origins of the first consultations date back to prehistoric times.</Text>
      </View>

      <Text style={styles.footer}>info@marblespa.com | www.marblespa.com</Text>
    </Page>
  </Document>
);

export default InvoicePDF;