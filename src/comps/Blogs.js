import useFirestore from "../hooks/useFirestore";

const Blogs = () => {

    const { docs } = useFirestore('blogs');

    return ( 
        <div className="view-blogs">
            <h2 id="header">Blogs</h2>
        <div className="blog-grid">
            {docs && docs.map(doc =>(
                <div className="blogItem">
                    <div className="info">
                        <h2>{ doc.title }</h2>
                        <p className="author">{ doc.author }</p>
                        <p className="text">{ doc.text }</p>
                    </div>
                    <div className="img">
                        <img src={doc.url} alt="image" />
                    </div>
                </div>
            ))}
        </div>
        </div>
     );
}
 
export default Blogs;