import React,{useState} from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import {Controlled as ControlledEditor} from 'react-codemirror2';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCompressAlt,faExpandAlt} from '@fortawesome/free-solid-svg-icons'

function Editor(props) {
  const {
    language,
    displayName,
    value,
    onChange,
  }=props;

  const [open,setOpen] = useState(true);
  function handleChange(editor, data, value){
    onChange(value);
  }
  return(<div className={`Editor ${open ? '' : 'collapsed'}`}>
    <div className='Editor-Info'>
      {displayName}
      <button
        className='open-close-btn'
        onClick={() => {
            setOpen(!open);
        }}
      >
        <FontAwesomeIcon icon={ (open)? faCompressAlt:faExpandAlt}/>
      </button>
    </div>
    <ControlledEditor 
        onBeforeChange={handleChange}
        value={value}
        className='Code-Editor'
        options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            theme: 'material',
            lineNumbers: true,
    }}
    />
  </div>);
}

export default Editor
