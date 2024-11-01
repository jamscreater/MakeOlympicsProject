import React, { useState } from 'react'
import AppContainer from './assets/component/AppContainer'

// input에 입력한 값들
const App = () => {
  const [formData, setFormData] = useState({
    country: '',
    gold: '',
    silver: '',
    bronze: '',
  })  


  // 화면에 보이는 국가 데이터
  const [nationData, setNationData] = useState([]) 

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  // 제출 부분
  const handleSubmit = (e) => {
    // 수정 데이터 
     e.preventDefault();
     const existingIndex = nationData.findIndex(
       (nation) => nation.country === formData.country
     );
 
     if (existingIndex !== -1) {
      handleUpdate(formData.country, formData); // 이미 존재하면 업데이트
     } else {
       setNationData([...nationData, formData]); // 새 국가 데이터 추가
     }
     setFormData({ country: '', gold: '', silver: '', bronze: '' }); // 폼 초기화
   };

    // 메달 데이터 업데이트
    const handleUpdate = (country, updatedData) => {
     setNationData(nationData.map((nation) => nation.country === country ? { ...nation, ...updatedData } : nation
     ));
   }
 
  
// // 데이터 삭제
const handleDelete = (country) => {
  setNationData(nationData.filter(nation => nation.country !== country));
};

// 내림차순으로 정렬
  const scoreCountries = [...nationData].sort((a, b) => b.gold - a.gold)
  console.log(scoreCountries)

  return (
    <>
      
      <AppContainer 
      handleUpdate = {handleUpdate}
      scoreCountries={scoreCountries}
      handleDelete={handleDelete}
      handleChange={handleChange}
      formData = {formData}
      handleSubmit = {handleSubmit}
      />
    </>
  )
}
export default App
