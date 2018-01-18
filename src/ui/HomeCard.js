import React from 'react';

const HomeCard =(props)=>{
    return(
        <div className="col-12 col-sm-4" style={{paddingTop:'10px'}}>
                    <div className="card" style={{width: '20rem;'}}>
                        <img className="card-img-top rounded mx-auto -block" style ={{paddingTop:'5px',width:'100px', heigh:'100px'}} src="https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ficones-gratis%2Fpessoas-em-geral_318-28142.jpg&f=1" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text">{props.text}</p>
                                <button className="btn btn-primary" onClick={props.action}>{props.title}</button>
                            </div>
                    </div>
        </div>
    );
};

export default HomeCard;