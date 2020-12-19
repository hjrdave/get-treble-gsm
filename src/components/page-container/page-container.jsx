import React, { useEffect } from "react";
import { useTreble, updateStore } from 'treble-gsm';

function PageContainer({ children, title, id, activePath, className }) {

  const [{ }, Store] = useTreble();

  //updates page path to global state for navigation active list items
  useEffect(() => {
    Store.update('updateActiveNavPath', activePath?.pathname);
  }, [activePath]);

  return (
    <>
      <div id={id} className={className}>
        {children}
      </div>
    </>
  )
}

export default PageContainer
