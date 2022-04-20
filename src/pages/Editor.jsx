import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../App.css';
const CustomEditor = () => {
    const [contentState, setContentState] = useState({});
    return (
        <div>
            <header className="App-header">
                Sourav's blogging Website Editor
            </header>
            <Editor
                /* initialContentState={contentState}
                onContentStateChange={setContentState} */
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
            />
        </div>
    )
}
export default CustomEditor;
