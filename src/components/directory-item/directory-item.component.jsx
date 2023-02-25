import {DirectoryItemContainer,BackgroundImage,Body} from './directory-item.styles'
import { useNavigate,Link } from 'react-router-dom'

const DirectoryItem=({category})=>{
    const {title,imageUrl,id,route}=category;
    const navigate=useNavigate()
    const onNavigateHandler=()=>navigate(route);
    return(
        <DirectoryItemContainer key={id}>
          <BackgroundImage 
            imageUrl={imageUrl}
          />
         
            <Body className="body" onClick={onNavigateHandler}>
              <h2>{title}</h2>
                <p >SHOP NOW</p>
             
            </Body>
        
        </DirectoryItemContainer>
    )

}

export default DirectoryItem