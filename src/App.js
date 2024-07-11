 import ButtonComponent from "./components/button/button.js";
import { Headings1,Headings2, Headings3,Headings4} from "./components/Heading/Headings.js";
import { ImageComponent } from "./components/image/imageComponent.js";
import{ListParentOrdered,
       ListParentUnordered,
}from "./components/lists/listParent.js";
import{Card} from"./components/cards/card.js";


const App = () => {
  return  (

    <div>
      <Card></Card>
      
       <ButtonComponent/>
      <ImageComponent/>
      <Headings1></Headings1>
      <ImageComponent/>
      <Headings2></Headings2>
      <Headings3></Headings3>
      <Headings4></Headings4>
      <h1>hello world</h1>
      <ListParentOrdered/>
      <ListParentUnordered/> 
       
    
    </div>
  );
  
};

 export default App