import { useRef } from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import DocumentTemplate from './DocumentTemplate';

// Define styles for PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    marginBottom: 30,
    fontStyle: 'italic',
  },
  taskSection: {
    marginTop: 20,
  },
  ruleLine: {
    borderBottom: 1,
    borderColor: 'black',
    marginVertical: 15,
  },
  separator: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 14,
    fontWeight: 'bold',
  },
  treatSection: {
    textAlign: 'left',
    marginTop: 20,
  }
});

// PDF Document component using template
const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>{DocumentTemplate.title}</Text>
      <Text style={styles.description}>
        {DocumentTemplate.sections.header(data).description}
      </Text>
      <View style={styles.taskSection}>
        <Text>{DocumentTemplate.sections.task.title}</Text>
        {[...Array(DocumentTemplate.sections.task.lines)].map((_, i) => (
          <View key={i} style={styles.ruleLine} />
        ))}
      </View>
      <Text style={styles.separator}>{DocumentTemplate.sections.separator}</Text>
      <View style={styles.treatSection}>
        <Text>{DocumentTemplate.sections.treat(data).title}:</Text>
        <Text>{DocumentTemplate.sections.treat(data).treat}</Text>
        <Text>{'\n'}</Text>
        <Text>{DocumentTemplate.sections.treat(data).contactInfo.label}:</Text>
        <Text>{DocumentTemplate.sections.treat(data).contactInfo.value}</Text>
        <Text>{'\n'}</Text>
        <Text style={{ fontStyle: 'italic' }}>
          For more information please visit: https://www.taskortreat.com.
        </Text>
      </View>
    </Page>
  </Document>
);

// HTML Preview component using the same template
function GeneratedDocument({ data }) {
  const documentRef = useRef();
  const template = DocumentTemplate;

  return (
    <div className="generated-document">
      <div className="document-preview" ref={documentRef}>
        <h2>{template.title}</h2>
        <p className="description">{template.sections.header(data).description}</p>
        <div className="task-section">
          <p>{template.sections.task.title}</p>
          <div className="rule-lines">
            {[...Array(template.sections.task.lines)].map((_, i) => (
              <div key={i} className="rule-line"></div>
            ))}
          </div>
          <p className="separator">{template.sections.separator}</p>
          <div className="treat-section">
            <p>{template.sections.treat(data).title}:</p>
            <p>{template.sections.treat(data).treat}</p>
            <p>{template.sections.treat(data).contactInfo.label}:</p>
            <p>{template.sections.treat(data).contactInfo.value}</p>
          </div>
        </div>
        <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
          For more information please visit: <a href="https://www.taskortreat.com" target="_blank" rel="noopener noreferrer">https://www.taskortreat.com</a>.
        </p>
      </div>
      <PDFDownloadLink
        document={<MyDocument data={data} />}
        fileName="task-or-treat.pdf"
      >
        {({ loading }) => (
          <button className="download-btn" disabled={loading}>
            {loading ? 'Preparing PDF...' : 'Download PDF'}
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
}

export default GeneratedDocument; 