import React, { Component } from 'react';
import { Box } from 'rebass';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Row, Col, Select, Checkbox, Input, Button, message } from 'antd';
import loremIpsum from 'lorem-ipsum';
import airtable from 'airtable';
import defaultDictionary from '../utils/dictionary';

const Option = Select.Option;
const { TextArea } = Input;

const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID;

const base = new airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

const defaultOptions = {
  count: 2,
  units: 'paragraphs',
  format: 'html',
  suffix: '\n\n',
};

const stripString = string => string.replace(/(<([^>]+)>)/gi, '');

class Home extends Component {
  state = {
    text: '',
    words: [],
    dictionary: [],
    isHTML: false,
  };

  componentDidMount() {
    base('Caliches')
      .select({
        filterByFormula: 'Status = TRUE()',
      })
      .firstPage((err, records) => {
        const wordsFromDictionary = this.getWordsFromDictionary(records);
        this.setState({
          text: this.getLoremText({
            words: [...defaultDictionary, ...wordsFromDictionary],
          }),
          words: [...defaultDictionary, ...wordsFromDictionary],
          dictionary: this.normalizeDictionary(records),
        });
      });
  }

  normalizeDictionary = collection =>
    collection.map(item => ({
      id: item.id,
      fields: item.fields,
    }));

  getLoremText = options => {
    return loremIpsum({
      ...defaultOptions,
      ...options,
    });
  };

  getWordsFromDictionary = collection =>
    collection.map(item => item.fields.Word);

  handleInputChange = value => {
    const { words } = this.state;
    this.setState({
      text: this.getLoremText({ count: value, words }),
    });
  };

  handleFormatChange = value => {
    const { words } = this.state;
    const { target: { checked } } = value;
    this.setState({
      isHTML: !!checked,
    });
  };

  handleCopyClick = event => {
    message.success('¡Chivo! Texto copiado');
  };

  render() {
    const { text, isHTML } = this.state;
    const strippedString = isHTML ? text : stripString(text);

    return (
      <Row>
        <Col xs={24} sm={24} md={8}>
          <Box mb={[4]}>
            <h3>¿Cuántos va querer?</h3>
            <Select
              size="large"
              style={{ width: 150 }}
              defaultValue="2"
              onChange={this.handleInputChange}
            >
              <Option value="1">1 párrafo</Option>
              <Option value="2">2 párrafos</Option>
              <Option value="3">3 párrafos</Option>
              <Option value="4">4 párrafos</Option>
            </Select>
          </Box>
        </Col>
        <Col xs={24} sm={24} md={16}>
          <Box my={2}>
            <Row type="flex" justify="space-between" align="middle">
              <Checkbox onChange={this.handleFormatChange}>HTML</Checkbox>
              <CopyToClipboard
                text={strippedString}
                onCopy={this.handleCopyClick}
              >
                <Button type="dashed">Copiar texto</Button>
              </CopyToClipboard>
            </Row>
          </Box>
          <TextArea
            value={strippedString}
            spellCheck={false}
            style={{ resize: 'none' }}
            autosize
          />
        </Col>
      </Row>
    );
  }
}

export default Home;
