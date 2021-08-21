import { useState } from "react";
import useStorage from "../hooks/useStorage";
import AddFile from "./AddFile";
import Blogs from "./Blogs";

const Create = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [file, setFile] = useState(null);
    const[error, setError] = useState(null);
    const[submit, setSubmit] = useState(false);
    const types = ['image/png', 'image/jpeg'];


    const checkFile = (e) =>{
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
             setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpg)');
        }
    }

    const CreateBlog = (e) => {
        e.preventDefault();
        setSubmit(true);
        e.target.reset();
    }



    return ( 
        <div className="blog">
            <div className="create-blog">
                <h2>Create Blog</h2>
                <form onSubmit={CreateBlog}>
                    <input type="text" required placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
                    <input type="text" required placeholder="Author" onChange={(e) => setAuthor(e.target.value)}/>
                    <textarea type="text" required placeholder="Text" onChange={(e) => setText(e.target.value)}/>
                    <label for="file-upload" class="custom-file-upload"><span>+</span></label>
                    { file && <p>{ file.name }</p>}
                    <input id="file-upload" type="file" required onChange={checkFile} />

                    <button type="submit">Create</button>
                </form>
                {submit && file && title !== '' && author !== '' && text !== '' && <AddFile file={file} setFile={setFile} title={title} setTitle={setTitle} author={author} setAuthor={setAuthor} text={text} setText={setText} submit={submit} setSubmit={setSubmit}/>}
                {error && <div>{error}</div>}
                
            </div>
            
        </div>
     );
}
 
export default Create;