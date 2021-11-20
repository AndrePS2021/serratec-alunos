import styled from "styled-components";

const Form = styled.form`
   background-color: 
`;

const Cadastro = () => {
    return (
        <div>
           <input type="text" placeholder="Nome" />
           <input type="text" placeholder="CPF" /> 
           
           <button>Cadastrar</button> 
        </div>
    )
}

export default Cadastro;