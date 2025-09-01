import './Rendering.css';
function Rendering(){
    var products=[{id:1,name:"Puma",price:2500}
        ,{id:2,name:"addidas",price:2500},{id:3,name:"MAX",price:2500},
        {id:4,name:"Roadstar",price:2500},{id:5,name:"Levis",price:2500},
        {id:6,name:"buffallo",price:2500},{id:7,name:"WROGN",price:2500},{id:8,name:"Nike",price:2500},
        {id:9,name:"Allen solly",price:2500},{id:10,name:"Jockey",price:2500},{id:11,name:"Armani",price:2500}
        ,{id:12,name:"GAP",price:2500},{id:13,name:"BIBA",price:2500}
    ]
    return(
        <div>
            <h1>Rendering Data</h1>
            <h1>List Rendring</h1>
            <ol>
            {products.map((product)=>(
                <li key={product.id} >
                    {product.name},{product.price}
                </li>
            ))}
      </ol>
      <h1>Table Rendering</h1>
      <table border={1}>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>ADD TO CART</th>
        </tr>
        <tbody>
            {
                products.map((product)=>(
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td><button>Add cart</button></td>
                    </tr>
                ))
            }
        </tbody>
      </table>
      <h1>Div Rendering</h1>
      <div style={{display:"flex",justifyContent:"center",flexDirection:"row", gap:"10px"}}>
            {
        products.map(
            (product)=>(
            <div className="division" key={product.id}>
                <h1>{product.name}</h1>
                <h2>{product.price}</h2>
                <button>Add cart</button>
            </div>
            )
        )
        
      }
      </div>
      
      
      <br></br>
        </div>
    );
}

export default Rendering;