


const Product = ({title, price, description, image, index}) =>{
    return (
        <>
        <div className="card">
            <div className={'card-image nail-' + index}></div>
            <h2>{title}</h2>
            <h3>{price}</h3>
            <p>{description}</p>
            <div class="cartbuttonForm">
            <form>
               <div class="inputBox1">
                  <input type="submit" name="submit button" value="Add To Cart"/>
               </div>
            </form>
            </div>
        </div> 
        </>
    )
}

export default Product;
