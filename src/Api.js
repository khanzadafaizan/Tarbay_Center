import React from 'react'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
function Api() {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
      fetch("https://dev-apis.explorebtk.com/api/v1/categories").then((result)=>{
        result.json().then((resp)=>{
         setCategories(resp)
        })
      })
    },[])
    console.log(categories)
  return (
    <>
    <div style={{height:"80px", marginTop:"10px"}}>
      <h1 className='text-center'>API</h1>
    </div>
    <Table striped="columns">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Icons</th>
          <th>created</th>
          <th>updated</th>
        </tr>
      </thead>
      <tbody>
        {
          categories.map((category,index)=>
        <tr key={index}>{index +1}
          <td>{category.name}</td>
          <td>{category.icon}</td>
          <td>{category.createdAt}</td>
          <td>{category.updatedAt}</td>
        </tr>
          )}
      </tbody>
    </Table>
    </>
  )
}

export default Api
