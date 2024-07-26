 import React from "react";
import { Card } from "./components/cards/card.js";
import { ImageComponent } from "./components/image/imageComponent.js";
import { ListParentOrdered } from "./components/lists/listParent.js";
import ButtonComponent from "./components/button/button.js";

const App = () => {
  const isLogin = true;
  // if(isAfterNoon) {
  //   return (
  //     <>
  //     <h3>wellcome user goodafternoon</h3>
  //     <ImageComponent />
  //     <Card />
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //     <h3>please login to access the app</h3>
  //     </>
  //   );
  // }
  return(
  <div>
     {/* {  isLogin ? (
        //<div>
          
          <h3>wellcome user goodafternoon</h3>
          <ImageComponent />
           <Card />
           </div>
  ) : (
    <h3>please login to access the pp</h3>
   )} */}

      
       {isLogin && (  
          <React.Fragment>
              {/* <button onClick={() => {}} className="button">
              click me</button> */}
           <h3>wellcome user good afternoon</h3>
           {/* <ListParentOrdered /> */}
          {/* <ImageComponent />
           <Card /> */}
           <ButtonComponent />
           </React.Fragment>  
          )}
       </div>
  );
};

export default App;