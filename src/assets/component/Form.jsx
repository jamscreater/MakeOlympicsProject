import React from 'react';

function Form(props){
    return (
        <form onSubmit={props.handleSubmit} className='formContainer'>
    <div style={{
      display:"flex", 
      justifyContent:"center", 
      alignItems:"center", 
      gap:"10px"}}>
    <label style={{
      textAlign:"center",
      }}>
        국가 이름:
        <input 
        type="text"
        name='country' 
        value={props.formData.country}
        onChange={props.handleChange}
        required
        />
      </label>
      <label style={{
        textAlign:"center"
        }}>
        금메달:
        <input 
        type="text"
        name='gold' 
        value={props.formData.gold}
        onChange={props.handleChange}
        required
        min="0"
        />
      </label>
      <label style={{
        textAlign:"center"
        }}>
        은메달:
        <input 
        type="number"
        name='silver' 
        value={props.formData.silver}
        onChange={props.handleChange}
        required
        min="0"
        />
      </label>
      <label style={{textAlign:"center"}}>
        동메달:
        <input 
        type="number"
        name='bronze' 
        value={props.formData.bronze}
        onChange={props.handleChange}
        required
        min="0"
        />
      </label>
    </div>
    <div style={{
      display:"flex",
      flexDirection:"row", 
      justifyContent:"center", 
      alignItems:"center"
      }}>
      <button type='submit' style={{
        marginTop: "20px",
        padding:"8px 12px",  
        border:"1px solid white",
         backgroundColor: "yellow",
         borderRadius: "8px",
         }}>국가 추가</button>
      <button type='button' style={{
        marginTop: "20px",
        padding:"8px 12px",  
        border:"1px solid white",
         backgroundColor: "yellow",
         borderRadius: "8px"
         }}  onClick={() => { 
          props.handleUpdate(props.formData.country, props.formData);
        }}>업데이트</button>
         </div>
    </form>
    )
}

  export default Form