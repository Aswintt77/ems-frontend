import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';



function View() {
  const base_url='http://localhost:8000'
  const [employeeData,setEmployeeData]=useState({})
  const{id}=useParams()
  console.log(id);
  //get a particular employee details
  const getEmployee=async(id)=>{
    const result = await axios.get(`${base_url}/get-an-employee/${id}`)
    console.log(result.data.employees);
    setEmployeeData(result.data.employees)
  }
  console.log(employeeData);
  useEffect(()=>{
  getEmployee(id)
},[])
  return (
    <div>
      <h3 className='text-center m-4 text-primary'> View Employee Details</h3>
      <div className='container p-5 m-6 d-flex justify-content-between'>
        <MDBCard  style={{ width: '500px',boxShadow:'1px 1px 5px 1px'}}>
          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
           <a>
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle  className='text-center'>Employee Details</MDBCardTitle>
            <MDBCardText>
              <MDBListGroup style={{ minWidth: '22rem',marginTop:'50px' }} light>
                <MDBListGroupItem active noBorders aria-current='true' className='bg-light text-primary px-3'>
                Employee ID :  <b style={{color:'black'}}>{employeeData.id}</b>
                </MDBListGroupItem>
                <MDBListGroupItem noBorders className='bg-light text-primary px-3'>
                  Full Name :  <b style={{color:'black'}}>{employeeData.name}</b>
                </MDBListGroupItem>
                <MDBListGroupItem noBorders className='bg-light text-primary px-3'>
                  Age :  <b style={{color:'black'}}>{employeeData.age}</b>
                </MDBListGroupItem>
                <MDBListGroupItem noBorders className='bg-light text-primary px-3'>
                  Designation :  <b style={{color:'black'}}>{employeeData.age}</b>
                </MDBListGroupItem>
                <MDBListGroupItem noBorders className='bg-light text-primary px-3'>
                  Salary :  <b style={{color:'black'}}>{employeeData.salary}</b>
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCardText>

          </MDBCardBody>
        </MDBCard>
        <div className='image card text-center' style={{width:'500px',boxShadow:'1px 1px 5px 1px'}}>
          <img  style={{width:'80%',marginLeft:'60px', padding:'20px'}} src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/user.png" alt="" />
        </div>
      </div>
      <div className='text-center m-4'>
        <MDBBtn href='/'>Back To Home  </MDBBtn>
      </div>

    </div>
  )
}

export default View