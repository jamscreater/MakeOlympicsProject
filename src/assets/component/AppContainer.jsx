import React from 'react';
import Form from './Form';

function AppContainer({ scoreCountries, handleDelete, handleSubmit, formData,handleChange, handleUpdate}) {
  return (
    <div
      style={{
        width: "1200px",
        padding: "10px",
        border: "1px solid white",
        borderRadius: "10px",
        boxShadow: "0px 0px 3px 0px gray",
        margin: "20px auto",
      }} 
    >
      <div className="appContainer" style={{ width: "300px", margin: "auto" }}>
       <h1 style={{ color: "blue", textAlign: "center" }}>2024 파리 올림픽</h1>

       <Form
       handleUpdate = {handleUpdate}
        handleSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
      /> 

        {scoreCountries.map((nation) => (
          <ul key={nation.country} style={{ listStyle: "none", padding: "0", }}>
            <li>국가: {nation.country}</li>
            <li>금메달: {nation.gold}</li>
            <li>은메달: {nation.silver}</li>
            <li>동메달: {nation.bronze}</li>
            <li>
              <button onClick={() => handleDelete(nation.country)} style={{ marginLeft: '10px', color: 'red' }}>삭제</button>
            </li>
          </ul>
        ))}
      </div>
      <footer style={{
        textAlign: "center"
      }}>국가가 추가되지 않았습니다. 메달을 추가해주세오.
      </footer>
    </div>
  );
}

export default AppContainer;
