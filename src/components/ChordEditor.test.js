import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import ChordEditor from './ChordEditor';

describe('<ChordEditor />', () => {
  it('renders an editor area', () => {
    const editor = shallow(<ChordEditor />);
    expect(editor.find('textarea').length).toEqual(1);
  });

  it('renders an output area', () => {
    const editor = shallow(<ChordEditor />);
    expect(editor.find('div.chord-output').length).toEqual(1);
  });
  
  it('renders the chord chart output', () => {
    const editor = shallow(<ChordEditor />);
    const expectedOutput = 
    '<table>' +
    '<tr>' + 
    '<td class="chord"></td>' +
    '</tr>' +
      '<tr>' +
      '<td class="lyrics">Type some lyrics here&nbsp;</td>' +
      '</tr>' +
      '<table>';

      const realOutput = editor.find('div.chord-output').html();
    expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
  });
});
