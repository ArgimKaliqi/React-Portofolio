import "./product.css"

const Product = ({img,link,desc}) =>{
    return(
        <div className="p">
            <div className="p-browser">
                <div className="p-circle" id="c1" ></div>
                <div className="p-circle" id="c2"></div>
                <div className="p-circle" id="c3"></div>
            </div>
            <div className="p-comp">
                <p className="p-comp-t">
                E-commerce store with .Net, React,Redux, C#, Stripe,Cloudinary,TypeScript, EntityFramework, CoreIdentity Authentication etc.
               </p>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img" />
            </a>
        </div>
    )
}


export default Product