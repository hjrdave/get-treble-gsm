import React from 'react';
import Prism from "prismjs";
import styles from './codeBlock.module.scss';

export default function CodeBlock({ children, className }) {

    React.useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <>
            <div className={`language-javascript ${styles.codeBlock} ${className}`}>
                <pre className={styles.codeBK}>
                    <code>
                        {children}
                    </code>
                </pre>
            </div>
        </>
    )
}