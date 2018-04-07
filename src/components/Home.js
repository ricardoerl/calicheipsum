import React, { Component } from 'react';
import { Box } from 'rebass';
import { Row, Col, Select, Input } from 'antd';
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
};

class Home extends Component {
  state = {
    text: '',
    words: [],
    dictionary: [],
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

  render() {
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
          <TextArea
            value={this.state.text}
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
