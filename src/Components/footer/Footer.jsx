
import React from 'react';

export default function Footer() {
  return (
    <div className="row footer">
            <div className="col-lg-6 col-12 d-flex justify-content-center">
                <div className="icon-footer">
                    <h2 className="titulo-footer">SOCIAL MEDIA</h2>
                    <a href="https://www.facebook.com/nicolas.mendoza.988" target="blank"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/nicomendoza92/" target="blank"><i className="fab fa-instagram"></i></a>
                    <a href="https://github.com/NicolasMendoza92" target="blank"><i className="fab fa-github "></i></a>
                    <a href="https://www.linkedin.com/in/nicolasmendoza92/" target="blank"><i className="fab fa-linkedin "></i></a>
                </div>
            </div>
            <div className="d-flex justify-content-center col-lg-6 col-12">
                <div className='icon-footer'>
                    <h2 className="titulo-footer">CONTACT ME</h2>
                    <a href="https://wa.me/c/34644053023" target="blank"><i className="fab fa-whatsapp"></i></a>
                    <a href="nicomendoza.92@gmail.com" target="blank"><i className="fa fa-envelope"></i></a>
                </div>

            </div>
        </div>
  );
}

