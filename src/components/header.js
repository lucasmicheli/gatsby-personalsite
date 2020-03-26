import React from "react";
import illustration from '../imgs/undraw_home_cinema_l7yl.svg';
import Form from './contact.form';

export default () => (
    <header className="bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-purple-700 text-6xl">¡Hola! Soy Lucas</h1>
                    <p className="text-xl font-light">Soy desarrollador web y biólogo</p>
                </div>
                <img src={illustration} alt="Hombre disfrutando cine" style={{height:"300px"}}></img>
            </div>
            
            <div>
                <Form />
            </div>
        </div>

    </header>
)