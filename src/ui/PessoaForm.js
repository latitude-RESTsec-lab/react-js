import React from 'react';

const PessoaForm = ({ submitHandler }) => {
    let _siape, _idPessoa, _nome, _matriculaInterna, _nomeIdentificacao, _dataNascimento, _sexo;
    const handleSubmit = (e) => {
        submitHandler(e, {
            siape: _siape.value,
           // id_pessoa: _idPessoa.value,
            nome: _nome.value,
            matricula_interna: _matriculaInterna.value,
            nome_identificacao: _nomeIdentificacao.value,
            data_nascimento: _dataNascimento.value,
            sexo: _sexo.value
        }
        );
        clearForm();
    }

    const clearForm = () => {
       // _idPessoa.value = '';
        _siape.value = '';
        _nome.value = '';
        _matriculaInterna.value = '';
        _nomeIdentificacao.value = '';
        _dataNascimento.value = '';
        _sexo.value = '';

    }
    return (
        <form onSubmit={handleSubmit} >
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label for="inputNome">Nome</label>
                    <input type="text" ref={input => _nome = input} className="form-control" id="nome" placeholder="Digite o Nome" />
                </div>
                <div className="form-group col-md-4">
                    <label for="matSiape">Siape</label>
                    <input type="text" ref={input => _siape = input} className="form-control" id="siape" placeholder="Digite o Siape" />
                </div>
                <div className="form-group col-md-4">
                    <label for="matInterna">Matrícula Interna</label>
                    <input type="text" ref={input => _matriculaInterna = input} className="form-control" id="matricula_interna" placeholder="Digite a Matricula Interna" />
                </div>
            </div>
            <div className="form-row">
            <div className="form-group col-md-4">
                    <label for="nomeIdentificacao">Nome de Identificação</label>
                    <input type="text" ref={input => _nomeIdentificacao = input} className="form-control" id="nome_identificao" placeholder="Digite o Nome de Identificação" />
                </div>
                <div className="form-group col-md-4">
                    <label for="inputState">Sexo</label>
                    <select id="inputState" ref={input => _sexo = input} className="form-control">
                        <option selected>Masculino</option>
                        <option>Feminino</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label for="inputData">Data de Nascimento</label>
                    <input type="date" ref={input => _dataNascimento = input} className="form-control" id="inputZip" />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Salvar</button>
        </form>

    )
};

export default PessoaForm;