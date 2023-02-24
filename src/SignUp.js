import React, { useState, useEffect } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBRow,
    MDBCol,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { setUser } from './slice/user';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2'

function SignUp() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setchecked] = useState(false);

    const signUp = () => {
        if(!checked){
            Swal.fire({
                title: 'Error!',
                text: 'Agree with the terms',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    }

    return (
        <>
            <MDBContainer fluid className='my-5'>

                <MDBRow className='g-0 align-items-center'>
                    <MDBCol col='6'>

                        <MDBCard className='my-5 cascading-right' style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}>
                            <MDBCardBody className='p-5 shadow-5 text-center'>

                                <h2 className="fw-bold mb-5">Sign up now</h2>

                                <MDBRow>
                                    <MDBCol col='6'>
                                        <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' onChange={(e) => setFirstName(e.target.value)}/>
                                    </MDBCol>

                                    <MDBCol col='6'>
                                        <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text' onChange={(e) => setLastName(e.target.value)}/>
                                    </MDBCol>
                                </MDBRow>

                                <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' onChange={(e) => setEmail(e.target.value)} />
                                <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' onChange={(e) => setPassword(e.target.value)} />

                                <div className='d-flex justify-content-center mb-4'>
                                    <MDBCheckbox name='flexCheck' value={checked} id='flexCheckDefault' label='Agree with the terms' onChange={(e) => setchecked(e.target.checked)} />
                                </div>

                                <MDBBtn className='w-100 mb-4' size='md' onClick={() => signUp()}>sign up</MDBBtn>

                                <div className="text-center">

                                    <p>or sign up with:</p>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='facebook-f' size="sm" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='twitter' size="sm" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='google' size="sm" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='github' size="sm" />
                                    </MDBBtn>

                                </div>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol col='6'>
                        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-100 rounded-4 shadow-4"
                            alt="" fluid />
                    </MDBCol>

                </MDBRow>

            </MDBContainer>
        </>
    )
}

export default SignUp;