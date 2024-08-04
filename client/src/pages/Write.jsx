import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { addPost } from '../services/addPost';
import { updatePost } from '../services/updatePost';
import { GLOBAL_API_URL } from '../services/_serviceVariables';

const Write = () => {

  const state = useLocation().state

  const navigate = useNavigate();

  const [value, setValue] = useState(state?.descr || '');
  const [title, setTitle] = useState(state?.title || '');
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || '');

  const upload = async () => {
    try{
      const formData = new FormData();
      formData.append("file", file)
      const res = await axios.post(`${GLOBAL_API_URL}/api/upload`, formData)
      return res.data.imgUrl;
    } catch(err) {
      console.log(err)
    }
  }

  const handlePublish = async (e) => {

    e.preventDefault();

    const imgUrl = await upload();
    const userItem = JSON.parse(localStorage.getItem('user'));

    const postInfo = {
      title: title,
      descr: value,
      cat: cat,
      img: file ? imgUrl : "",
      userId: userItem.id
    }

    const newPostInfo = {
      title: title,
      descr: value,
      cat: cat,
      img: file ? imgUrl : "",
      date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userId: userItem.id
    }


    // eslint-disable-next-line
    {
      state ? 
      await updatePost(state.id, postInfo).then((result) => {
        navigate('/')
      }).catch((err)=>{
        console.log(err)
      }) 
      : 
      await addPost(newPostInfo).then((result) => {
        navigate('/')
      }).catch((err)=>{
        console.log(err)
      }) 
    }
  }

  return (
    <div className='add'>

      <div className="content">
        <input value={title} type="text" placeholder='Title' onChange={e=>setTitle(e.target.value)}/>
        <div className="editorContainer">
          <ReactQuill className='editor' theme='snow' value={value} onChange={setValue} />
        </div>
      </div>

      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{display: 'none'}} type='file' name='file' id='file' onChange={e=>setFile(e.target.files[0])}/>
          <label className='file' htmlFor='file'>Upload Image</label>
          <div className="buttons">
            <button>Save as draft</button>
            <button onClick={handlePublish}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>

          <div className="cat">
            <input type='radio' checked={cat === 'american'} name='cat' value='american' id='american' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor='american'>American</label>
          </div>

          <div className="cat">
            <input type='radio' checked={cat === 'indian'} name='cat' value='indian' id='indian' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor='indian'>Indian</label>
          </div>
          
          <div className="cat">
            <input type='radio' checked={cat === 'italian'} name='cat' value='italian' id='italian' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor='italian'>Italian</label>
          </div>

          <div className="cat">
            <input type='radio' checked={cat === 'chinese'} name='cat' value='chinese' id='chinese' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor='chinese'>Chinese</label> 
          </div>
          
          <div className="cat">
            <input type='radio' checked={cat === 'french'} name='cat' value='french' id='french' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor='french'>French</label>
          </div>
          
          <div className="cat">
            <input type='radio' checked={cat === 'mexican'} name='cat' value='mexican' id='mexican' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor='mexican'>Mexican</label>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Write