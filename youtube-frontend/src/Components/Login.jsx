import {useState} from 'react'
import axios from 'axios'
import FormData from 'form-data'
const init={
    email: '',
    password: ''
}
export const Login=()=>{
    const [data,setData] = useState(init);
    const {email,password} = data;
    // const form = new formData();
    

    const handleChange = (e)=>{
        const name= e.target.name;
        const password = e.target.value;
        setData({...data,[name]:password});
    }


    async function sendData(e){
        e.preventDefault();
      try{
        const form = new FormData();
        form.append('email',data.email);
        form.append('password',data.password);
        let d = await axios("https://masai-youtube.herokuapp.com/api/signin",{
            method: 'post',
            url: 'https://masai-youtube.herokuapp.com/api/signin',
            data: form,
            headers: {
                'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
            },
        });
        // let da = await d.json();
        
        console.log(d.data.tokenPayload)
      }catch(err){
          console.log(err.message);
      }
    }

    console.log(data);
    return <>
        <div>
            <form onSubmit={sendData}>
                <input onChange={handleChange} name='email' value={email} type='text' placeholder="User name" />
                <input onChange={handleChange} name='password' value={password} type='password' placeholder="password"></input>
                <button type='submit'>Login</button>
            </form>
        </div>
    </>
}