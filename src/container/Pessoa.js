import React, { Component } from 'react';


import PessoaForm from '../ui/PessoaForm';

export default class Pessoa extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            pessoas: [
                {
                    id: 1,
                    nome: 'Lucas',
                    siape: '3746419',
                    sexo:'Masculino'
                },
                {
                    id: 2,
                    nome: 'Gabriel',
                    siape: '0382413',
                    sexo:'Masculino'
                },
                {
                    id: 3,
                    nome: 'Lorena',
                    siape: '1731804',
                    sexo:'Feminino'
                },
                {
                    id: 4,
                    nome: 'Rafael',
                    siape: '9381247',
                    sexo:'Masculino'
                }
            ]
        }
    }

    handleSubmit(e, { nome, siape, sexo }) {
        e.preventDefault();
        var state = this.state;
        var myRelease = {
            id: state.pessoas.length + 1,
            nome: nome,
            siape: siape,
            sexo: sexo
        }
        this.setState({ pessoas: state.pessoas.concat(myRelease) });
    }

    handleRemove(id) {
        console.log('Implement remove function here!');
        var myPessoa = this.state.pessoas;
        myPessoa.splice(id, 1)
        this.setState({ pessoas: myPessoa });
    }


    render() {
        return (
            <div className="container" style={{ paddingTop: '25px' }}>
                <PessoaForm submitHandler={this.handleSubmit}/>
                <div style={{ paddingTop: '25px' }}>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Siape</th>
                                <th>Sexo</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.pessoas.map((pessoa, index) => {
                                const onClickRemove = (e) => {
                                    this.handleRemove(index);
                                }
                                return (
                                    <tr key={pessoa.id}>
                                        <th scope="row">{pessoa.id}</th>
                                        <td>{pessoa.nome}</td>
                                        <td>{pessoa.siape}</td>
                                        <td>{pessoa.sexo}</td>
                                        <td><button type="button" className="btn btn-danger btn-sm" onClick={onClickRemove}>Remover</button></td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}
