import React, {createContext} from 'react';
import { useState } from 'react';




export const GlobalContext = createContext()

export const GlobalProvider = (props) => {

    const [fetchStatus, setFecthStatus] = useState(true);
    const [currentId, setCurrentId] = useState(-1);  
  

    const [input, setInput] = useState({
        title: "",
        job_description: "",
        job_qualification: "",
        job_type: "",
        job_tenure: "",
        job_status: "",
        company_name: "",
        company_image_url: "",
        company_city: "",
        salary_min: "",
        salary_max: ""

    });

     const handleInput = (event) => {
        let name  = event.target.name
        let value = event.target.value

        if(name === "title"){
            setInput( {...input, title : value} )
          }else if(name === "job_description"){
            setInput( {...input, job_description : value} )
          }
          else if(name === "job_qualification"){
            setInput( {...input, job_qualification : value} )
          }
          else if(name === "job_type"){
            setInput( {...input, job_type : value} )
          }
          else if(name === "job_tenure"){
            setInput( {...input, job_tenure : value} )
          }else if(name === "job_status"){
            setInput( {...input, job_status : value} )
          }else if(name === "company_name"){
            setInput( {...input, company_name : value} )
        }else if(name === "company_image_url"){
            setInput( {...input, company_image_url : value} )
        }else if(name === "company_city"){
            setInput( {...input, company_city : value} )
        }else if(name === "salary_max"){
            setInput( {...input, salary_max : value} )
        }
        else if(name === "salary_min"){
            setInput( {...input, salary_min : value} )
        }
    }


    // auth
    const [inputAuth, setInputAuth] = useState({
      name: "",
      image_url: "",
      email: "",
      password: ""
  })
  
  const handleInputAuth = (event) => {
     let name = event.target.name
     let value = event.target.value
  
      if (name === 'name'){
          setInputAuth({...inputAuth, name : value})
      } else if (name === "image_url"){
          setInputAuth({...inputAuth, image_url : value})
      } else if (name === "email"){
          setInputAuth({...inputAuth, email : value})
      } else if (name === "password"){
          setInputAuth({...inputAuth, password : value})
      }
  } 

//   Search Feature



    return(
        <GlobalContext.Provider value={
            {
              fetchStatus,
              setFecthStatus,
              input, setInput,
              currentId, setCurrentId,
              handleInput,
              inputAuth, setInputAuth,
               handleInputAuth,
               

            }
        }>
            {props.children}

        </GlobalContext.Provider>
    )
}