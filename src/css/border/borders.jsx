function borders(){
    return(
        <div>
            <style>
                {
                    `
                    .solid{
                        border:2px solid red
                    }
                    .dashed{
                    border-width:2px;
                       border-style:dashed;
                       border-color:red
                    }
                    .dotted{
                        border:2px dotted blue;
                    }
                    `
                }
            </style>
            <h1 className="solid">Solid</h1>
            <h1 className="dashed" style={{}}>DAashed</h1>
            <h1 className="dotted">Dotted</h1>
        </div>
    );
}
export default borders;