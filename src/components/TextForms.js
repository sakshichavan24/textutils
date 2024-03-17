import React, { useState } from 'react'



export default function TextForms(props) {

    const [Text, setText] = useState('Enter Text here');
    const handelclick = () => {
        console.log("upper case clicked" + Text);
        let newtext = Text.toUpperCase();
        setText(newtext)
    }
    const handellowclick = () => {
        console.log("upper case clicked" + Text);
        let newtext = Text.toLowerCase();
        setText(newtext)
    }
    const handelclearclick = () => {
        console.log("upper case clicked" + Text);
        let newtext = "";
        setText(newtext)
    }
    // const handelcapitalclick = () => {
    //     console.log("upper case clicked" + Text);
    //     let newtext = Text.capitalcase();
    //     setText(newtext)
    // }


    // const handelcapitalclick = (event) => {
    //     // let firstLetter = event.target.value.charAt(0);
    //     // // setText(firstLetter.toUpperCase() + event.target.value.slice(1))
    //     // event.target.value = firstLetter.toUpperCase() + event.target.value.slice(1);

    //     let newtext= Text.slice(0,1).toUpperCase() + Text.slice(1, Text.length)
    //     setText(newtext)

    //   };

    const handelcopytext = () => {
        var Text = document.getElementById("mybox");
        Text.select();
        navigator.clipboard.writeText(Text.value);
    }

    const handelextratext = () => {
        var newtext = Text.split(/[ ]+/);
        setText(newtext.join(" "))
    }


    const handelonchange = (event) => {
        console.log("On change");
        setText(event.target.value)
    }


    // enter text here is default text 
    // useState is help to creat state , text is state here, settext is function use to upadate the text
    // usestate hook state use for state vareable banane me help karata hai


    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* onchange and onclick  are event  */}
                    <textarea className="form-control" value={Text} onChange={handelonchange} id="mybox" rows="8"></textarea>
                </div>


                <button className="btn btn-primary " onClick={handelclick}>Convert to UPPERCASE</button>
                <button className="btn btn-primary mx-2" onClick={handellowclick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handelclearclick}>Clear text</button>
                <button className="btn btn-primary mx-2" onClick={handelcopytext}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handelextratext}>Remove Extra Space</button>

            </div>
            <div className="container my-3">
                <h2>Youe text summary</h2>
                <p>{Text.split(" ").length} words and {Text.length}</p>
                <p>{0.008 * Text.split(" ").length} Minutes take time to read</p>
                <h3>Preview</h3>
                <p>{Text}</p>
            </div>
        </>
    )
}
