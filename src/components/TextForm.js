import React, {useState} from 'react'


export default function TextForm(props) {
    document.title = "TextUtils - Home" 
    const [text, setText] = useState("");

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("success", "Text converted to Uppercase Successfully!")
    } 
    
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("success", "Text converted to Lowercase Successfully!")
    }
    
    const handleClearClick = () =>{
        let newText = "";
        setText(newText)
        props.showAlert("success", "Text Cleared Successfully!")
    }
    
    const handleSentenceClick = () =>{
        let newText = text.toLowerCase();
        newText = newText.slice(0,1).toUpperCase() + newText.slice(1)
        setText(newText)
        props.showAlert("success", "Text converted to Sentence Case Successfully!")
    } 
    
    const handlePascalClick = () =>{
        let newText = text.toLowerCase().split(/[ ]+/)

        for (let index = 0; index < newText.length; index++) {
            const element = newText[index];
            newText[index] = element.slice(0,1).toUpperCase() + element.slice(1)
        }

        setText(newText.join(""))
        props.showAlert("success", "Text converted to Pascal Case Successfully!")
    } 
    
    const handleCamelClick = () =>{
        let newText = text.toLowerCase().split(/[ ]+/)

        for (let index = 1; index < newText.length; index++) {
            const element = newText[index];
            newText[index] = element.slice(0,1).toUpperCase() + element.slice(1)
        }

        setText(newText.join(""))
        props.showAlert("success", "Text converted to Camel Case Successfully!")
    } 
    
    const handleSnakeClick = () =>{
        let newText = text.toLowerCase().split(/[ ]+/)
        setText(newText.join("_"))
        props.showAlert("success", "Text converted to Snake Case Successfully!")
    }
    
    const handleTitleClick = () =>{
        let newText = text.toLowerCase().split(/[ ]+/)

        for (let index = 0; index < newText.length; index++) {
            const element = newText[index];
            newText[index] = element.slice(0,1).toUpperCase() + element.slice(1)
        }

        setText(newText.join(" "))
        props.showAlert("success", "Text converted to Title Case Successfully!")
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/)
        newText = newText.join(" ")
        setText(newText)
        props.showAlert("success", "Extra Spaces Cleared Successfully!")
    }

    const handleInverseClick = () =>{
            let newText = text.split("");
            console.log(newText)

            for (let index = 0; index < newText.length; index++) {
                const element = newText[index];
                let l = element.toLowerCase()
                let u = element.toUpperCase()

                if(element === l){
                    newText[index] = u
                }else{
                    newText[index] = l
                }    
            }

            setText(newText.join(""))
            props.showAlert("success", "Text converted to Inverse Case Successfully!")
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(text)
        props.showAlert("success", "Copied to Clipboard!")
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const calculateWords = () => {
        let numOfWords = 0;
        let words = text.trim().split(" ");
        let length = words.length;
        numOfWords =
          words[length - 1] === "" || words[length - 1] === " "
            ? length - 1
            : length;
        return numOfWords;
    };
    
  return (
    <>
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3">
        <textarea value={text} className={`form-control bg-${props.themeColor.textAreaBackgroundColor}`}  onChange={handleOnChange} placeholder='Type Something Here...' id="myBox" rows="8"></textarea>
        </div>

        <button disabled={text.length===0} className={`btn btn-${props.themeColor.btnClass} mx-1 mb-1`} onClick={handleUpClick}>UPPERCASE</button>
        <button disabled={text.length===0} className={`btn btn-${props.themeColor.btnClass} mx-1 mb-1`} onClick={handleLowClick}>lowercase</button>
        <button disabled={text.length===0} className={`btn btn-${props.themeColor.btnClass} mx-1 mb-1`} onClick={handleSentenceClick}>Sentence case</button>
        <button disabled={text.length===0} className={`btn btn-${props.themeColor.btnClass} mx-1 mb-1`} onClick={handleInverseClick}>InVeRsE CaSe / iNvErSe cAsE</button>
        <button disabled={text.length===0} className={`btn btn-${props.themeColor.btnClass} mx-1 mb-1`} onClick={handleTitleClick}>Title Case</button>
        <button disabled={text.length===0} className={`btn btn-${props.themeColor.btnClass} mx-1 mb-1`} onClick={handlePascalClick}>PascalCase</button>
        <button disabled={text.length===0} className={`btn btn-${props.themeColor.btnClass} mx-1 mb-1`} onClick={handleCamelClick}>camelCase</button>
        <button disabled={text.length===0} className={`btn btn-${props.themeColor.btnClass} mx-1 mb-1`} onClick={handleSnakeClick}>snake_case</button>
        <button disabled={text.length===0} className={`btn btn-${props.themeColor.btnClass} mx-1 mb-1`} onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className={`btn btn-${props.themeColor.btnClass} mx-1 mb-1`} onClick={handleExtraSpaces}>Handle Extra Spaces</button>
        <button disabled={text.length===0} className={`btn btn-${props.themeColor.btnClass} mx-1 mb-1`} onClick={handleCopy}>Copy Text</button>
    

        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{calculateWords()} Words and {text.length} Characters</p>
            <p>{0.008*calculateWords()} Minutes Read</p>
            <h2>Preview</h2>
        </div>
        <div className="container d-flex m-5 flex-wrap">
            <pre style={{textWrap: "balance"}}>            
                <p style={{fontFamily: 'Alkatra'}}>{text !== "" ? text : "Nothing to Preview..."}</p>
            </pre>
        </div>
        
    </> 
 )
}
