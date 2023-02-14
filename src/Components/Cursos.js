import React, {Component,Fragment} from 'react';
import car_infraestructura from '../../src/assets/imagenes/car-infraestructura-ti.png';
import car_programacion from '../../src/assets/imagenes/car-programacion.jpg';
import car_cloud from '../../src/assets/imagenes/car-cloud.jpg';
import car_gerencial from '../../src/assets/imagenes/car-gerencial.jpg';
import car_idiomas from '../../src/assets/imagenes/car-idiomas.jpg';

import curso_web from '../../src/assets/imagenes/curso-js.png';
import curso_cisco from '../../src/assets/imagenes/curso-cisco.png';
import curso_marketing from '../../src/assets/imagenes/curso-marketing_digital.jpg';
import curso_linux from '../../src/assets/imagenes/curso-linux-administration.png';
import curso_aws from '../../src/assets/imagenes/curso-aws.png';
import curso_python from '../../src/assets/imagenes/curso-python.jpg';
import curso_mvware from '../../src/assets/imagenes/curso-mvware-virtualizacion.jpg';
import curso_ingles from '../../src/assets/imagenes/curso-ingles_americano_.png';
import curso_excel from '../../src/assets/imagenes/curso-excel.png';
import curso_sixsigma from '../../src/assets/imagenes/curso-six-sigma.png';
import curso_scrummaster from '../../src/assets/imagenes/curso-scrum-master.png';
import curso_itilv4 from '../../src/assets/imagenes/curso-itil-v4-foundation.png';
import curso_ingles_para_ninos from '../../src/assets/imagenes/curso_ingles_para_ninos.jpeg';
import curso_portugues from '../../src/assets/imagenes/curso-portugues.jpeg';
import curso_espanol from '../../src/assets/imagenes/curso-espanol.jpg';

import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';



class Cursos extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <div className='animate__animated animate__fadeIn'>
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="2000">
                        <img src={car_infraestructura} class="d-block w-100 animate__animated animate__fadeIn" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Cursos de Infraestructura</h5>
                            <p className='text-orange'><strong>Infraestructura tecnológica</strong> </p>
                        </div>
                        </div>
                        <div className="carousel-item" data-interval="2000">
                        <img src={car_programacion} class="d-block w-100 animate__animated animate__fadeIn" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Cursos de Programación</h5>
                            <p style={{color:"white"}}><strong>Programación Front End y Back End</strong></p>
                        </div>
                        </div>
                        <div className="carousel-item" data-interval="2000">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Cursos Cloud Computing</h5>
                            <p style={{color:"white"}}><strong>Microsoft Azure - Amazon AWS</strong></p>
                        </div>
                        <img src={car_cloud} class="d-block w-100 animate__animated animate__fadeIn" alt="..."/>
                        
                        </div>
                        <div className="carousel-item" data-interval="2000">
                        <img src={car_gerencial} class="d-block w-100 animate__animated animate__fadeIn" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Cursos Gerenciales</h5>
                            <p style={{color:"white"}}><strong>Mejora tus habilidades gerenciales con las mejores herramientas tecnologicas.</strong> </p>
                        </div>
                        </div>
                        <div className="carousel-item" data-interval="2000">
                        <img src={car_idiomas} class="d-block w-100 animate__animated animate__fadeIn" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Cursos de Idiomas</h5>
                            <p style={{color:"white"}}><strong>Ingles - Portugués - Español</strong></p>
                        </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </button>
                </div>

                </div>

                <div class="container mt-3 ">
                    <h2 className='animate__animated animate__fadeIn'>Mira nuestro catálogo de Cursos</h2>
                    <br/>
                    {/* <!-- Nav tabs --> */}
                    <ul class="nav nav-tabs animate__animated animate__fadeIn">
                        <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#tech">Tecnología</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#idioma">Idiomas</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#gerencia">Gerenciales</a>
                        </li>
                        {/* <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#ninos">Para niños</a>
                        </li> */}
                    </ul>

                    {/* <!-- Tab panes --> */}
                    <div class="tab-content animate__animated animate__fadeInUp">
                        <div id="tech" class="container tab-pane active"><br/>
                        <h3>Cursos de Tecnología</h3>
                        <p>Lorem  magna aliqua.</p>
                        <div className='card-column'>
                        <div className="card" >
                            <img src={curso_web} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Web Developer</h5>
                                <p className="card-text">
                                <small class="text-muted">Some quick example text to build on the card title and make up the bulk of the card's content..</small>
                                </p>
                                <div className='precio'>
                                    <h5 className='labPrecio'><strong>Precio:</strong></h5>
                                    <h5 className='montoPrecio'><strong>$400</strong></h5>
                                </div>
                                <a class="btn btn-primary">Ver más...</a>
                            </div>
                        </div> 

                        <div className="card" >
                            <img src={curso_python} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Cursos de Idiomas</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a class="btn btn-primary">Ver más...</a>
                            </div>
                        </div> 

                        <div className="card" >
                            <img src={curso_cisco} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Cursos Gerenciales</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a class="btn btn-primary">Ver más...</a>
                            </div>
                        </div> 

                        <div className="card" >
                            <img src={curso_linux} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Cursos para Niños</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a class="btn btn-primary">Ver más...</a>
                            </div>
                        </div> 


                        </div>
                        
                
                        </div>

                        <div id="idioma" class="container tab-pane fade"><br/>
                        <h3>Menu 1</h3>
                        <p>Ut enim ad minim .</p>
                        <div className='card-column'>
                        <div className="card" >
                            <img src={curso_ingles} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Cursos de Tecnología</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a class="btn btn-primary">Ver más...</a>
                            </div>
                        </div> 

                        <div className="card" >
                            <img src={curso_ingles_para_ninos} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Cursos de Idiomas</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a class="btn btn-primary">Ver más...</a>
                            </div>
                        </div> 

                        <div className="card" >
                            <img src={curso_portugues} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Cursos Gerenciales</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a class="btn btn-primary">Ver más...</a>
                            </div>
                        </div> 

                        <div className="card" >
                            <img src={curso_espanol} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Curso de Español</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a class="btn btn-primary">Ver más...</a>
                            </div>
                        </div> 

                        </div>
                            
                        </div>


                        <div id="gerencia" class="container tab-pane fade"><br/>
                        <h3>Menu 2</h3>
                        <p>Sed ut perspiciatis unde omnis .</p>

                        <div className='card-column'>
                        <div className="card" >
                            <img src={curso_excel} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Cursos de Tecnología</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a class="btn btn-primary">Ver más...</a>
                            </div>
                        </div> 

                        <div className="card" >
                            <img src={curso_marketing} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Cursos de Idiomas</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a class="btn btn-primary">Ver más...</a>
                            </div>
                        </div> 

                        <div className="card" >
                            <img src={curso_scrummaster} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Cursos Gerenciales</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a class="btn btn-primary">Ver más...</a>
                            </div>
                        </div> 

                        <div className="card" >
                            <img src={curso_itilv4} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Cursos para Niños</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a class="btn btn-primary">Ver más...</a>
                            </div>
                        </div> 


                        </div>   

                        </div>

                        <div id="ninos" class="container tab-pane fade"><br/>
                        <h3>Menu 2</h3>
                        <p>Sed ut perspiciatis unde omnis .</p>

                        {/* <div className='card-column'>
                        <div className="card" >
                            <img src={curso_tecnologia} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Cursos de Tecnología</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a class="btn btn-primary">Ver más...</a>
                            </div>
                        </div> 

                        <div className="card" >
                            <img src={curso_idiomas} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Cursos de Idiomas</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a class="btn btn-primary">Ver más...</a>
                            </div>
                        </div> 

                        <div className="card" >
                            <img src={curso_gerencial} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Cursos Gerenciales</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a class="btn btn-primary">Ver más...</a>
                            </div>
                        </div> 

                        <div className="card" >
                            <img src={curso_para_ninos} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Cursos para Niños</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a class="btn btn-primary">Ver más...</a>
                            </div>
                        </div> 


                        </div>    */}

                        </div>
                    </div>
                    </div>
            </Fragment>
        );
    }
}
 
export default Cursos;