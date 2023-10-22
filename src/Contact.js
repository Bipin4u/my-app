import React from "react";
import { Link } from "react-router-dom";


function Contact(props){
    return (
        <>

            <section class="mb-4" style={{ color : props.color }}>

               
                <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
              
                <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>

                <div class="row">

                   
                    <div class="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                          
                            <div class="row">

                              
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="name" name="name" class="form-control" style={{ color : props.color , background : props.mode}}/>
                                        <label for="name" class="">Your name</label>
                                    </div>
                                </div>
                               

                              
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="email" name="email" class="form-control" style={{ color : props.color , background : props.mode}}/>
                                        <label for="email" class="">Your email</label>
                                    </div>
                                </div>
                           

                            </div>
                     

                       
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <input type="text" id="subject" name="subject" class="form-control" style={{color : props.color , background : props.mode}}/>
                                        <label for="subject" class="">Subject</label>
                                    </div>
                                </div>
                            </div>
    
                            <div class="row">

                       
                                <div class="col-md-12">

                                    <div class="md-form">
                                        <textarea type="text" id="message" name="message" rows="5" class="form-control md-textarea" style={{background : props.mode, color : props.color }}></textarea>
                                        <label for="message">Your message</label>
                                    </div>

                                </div>
                            </div>
                     

                        </form>

                        <div class="text-center text-md-lef ">
                            <Link class="btn btn-primary px-4  " >Send</Link>
                        </div>
                        <div class="status"></div>
                    </div>
              

             
                    <div class="col-md-3 text-center">
                        <ul class="list-unstyled mb-0">
                            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                <p>Bangalore, India</p>
                            </li>
                            <a href="https://www.linkedin.com/in/bipin-kumar-2449a71b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                <li><i class="fa-brands fa-linkedin mt-4 fa-2x"></i>
                                    <p>LinkedIn Profile</p>
                                </li>
                            </a>


                            <li><i class="fa-solid fa-envelope mt-4 fa-2x"></i>
                                <p>bipin.kumar@hcl.com</p>
                            </li>
                        </ul>
                    </div>
           

                </div>

            </section>

        </>
    )
}

export default Contact;