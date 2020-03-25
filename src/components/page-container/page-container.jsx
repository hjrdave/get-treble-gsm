import React, { useEffect } from "react";
import { useTreble, updateStore } from 'treble-gsm';

function PageContainer({ children, title, id, activePath }) {

  const [{ }, dispatch] = useTreble();

  //updates page path to global state for navigation active list items
  useEffect(() => {
    updateStore('updateActiveNavPath', activePath?.pathname, dispatch);
  }, [activePath]);

  return (
    <>
      <div id={id}>
        {children}
      </div>
    </>
  )
}

export default PageContainer
