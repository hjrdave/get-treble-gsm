import React, {useEffect, useRef, useState} from 'react';
import Prism from 'prismjs';
import './_code-block.scss';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-aspnet';


function CodeBlock({type, toolBar, children}){

    //refs
    const codeBlockContents = useRef(null);

    //state
    const [copyState, setCopyState] = useState('');

    //handlers
    const handleCopyToClipboard = () => {
        let code = (codeBlockContents.current).innerText;
        let newInput = document.createElement('textarea');
        newInput.value = code;
        document.body.appendChild(newInput);
        newInput.select();
        document.execCommand('copy');
        document.body.removeChild(newInput);
        setCopyState('Copied!');
    }

    const handleCodeColor = (type) => {
        switch(type) {
            case 'Javascript':
                return 'language-javascript';
            case 'JSX':
                return 'language-javascript';
            case 'SCSS':
                return 'language-scss';
            case 'HTML':
                return 'language-markup';
            case 'ASP.Net':
                return 'language-aspnet';
            case 'Typescript':
                return 'language-typescript';
            default:
                return null;
        }
    }

    useEffect(() => {
        Prism.highlightAll();
    },[])

    return(
        <div className='code-block pb-2'>
            {
                (toolBar !== false) ?
                <div className='code-block-title d-flex justify-content-between align-items-center'>
                    <p className='mb-0 pl-3 py-1'>{type}</p>
                    <p onClick={() => {handleCopyToClipboard()}} className='code-block-copy-code mb-0 pr-3 py-1'>
                        <i title='copy to clipboard' className="far fa-copy text-white pr-2"></i>
                        {copyState}
                    </p>
                </div> :
                null
            }

            <pre className={`px-4 py-0 mt-0 ${(toolBar === false) ? 'code-block-no-toolbar' : ''}`}>
                <code ref={codeBlockContents} className={`${(type !== undefined) ? handleCodeColor(type) : ''}`}>
                    {children}
                </code>
            </pre>
        </div>
    )
}

export default CodeBlock;