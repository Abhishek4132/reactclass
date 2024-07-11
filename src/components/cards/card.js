import { ImageComponent } from "../image/imageComponent"; 
import { Headings1 } from "../Heading/Headings";
import ButtonComponent from "../button/button";
import { ListParentOrdered } from "../lists/listParent";

export const Card =() => {
    return( <div>
        <Headings1 />
        <ImageComponent />
      <ListParentOrdered />
        <ButtonComponent />
    </div>
    );
};

export default Card()