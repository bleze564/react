export const PaintingList = (props) => {
    
    console.log(props)

    return ( 
        <>
        <ul>
         {
         props.data.map((item)=>{
            return (
                <li key={item.id}>
                    <img src={item.url} alt="" width='200'/>
                    <h2>{item.title}</h2>
                    <p>
                        Автор: <a href={item.author.url}>{item.author.tag}</a>
                    </p>
                    <p>Ціна: {item.price} грн</p>
                    <p>наявність {item.quantity}</p>
                    <button type="button">в кошик</button>
                </li>
            )
         })
         }
        </ul>
        </>
    )
}