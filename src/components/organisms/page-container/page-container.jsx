import React from "react";
//import { useTreble } from 'treble-gsm';

function PageContainer({ children, id, activePath, className }) {

  //const [, Store] = useTreble();

  //updates page path to global state for navigation active list items
  React.useEffect(() => {
    //Store.update('updateActiveNavPath', activePath?.pathname);
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
