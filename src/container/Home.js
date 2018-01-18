import React, {Component} from 'react';
import HomeCard from '../ui/HomeCard';
import {hashHistory} from 'react-router';

export default class Home extends Component{

    homeCardPessoa ={
        title: 'Pessoas',
        text: 'Gerenciar Pessoas',
        action:() => hashHistory.push('/pessoa')
    }
    
    render(){
        return(
            <div className="container text-center">
                <div className="row">
                    <HomeCard {...this.homeCardPessoa}/>
                    
                </div>

            </div>
        );
    }
};