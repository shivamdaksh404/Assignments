import { Fragment, useState} from "react";
import './ImageChange.css';

export function ImageChange() {
    const [change, setChange] = useState(0)
    const image = ["http://surl.li/fmxvz", "http://bitly.ws/BFVI", "http://bitly.ws/BFVZ", "http://bitly.ws/BFW8"]
      
    function changeImage() {
        setChange(change + 1)
        if (change === image.length - 1) {
          setChange(change * 0)
        }
        // console.log(change)
      }


      return (
        <Fragment>
            <div className="main-container">
                <div className="image"
                    //  class="centered"
                     >
                <img src={image[change]} alt="pictures" style={{height:"100%", width:"100%"
                }} />
                </div>
                <div className="button"
                    //  class="centered"
                      > 
                    <button 
                    onClick={changeImage}
                    > Change Image</button>
                </div>
            </div>
        </Fragment>
    )
}