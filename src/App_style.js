import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Header = styled.div`
    width: 100%;
    height: 80px;
    background-color: red;
    padding: 0 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.h1`
    font-size: 30px;
    font-weight: bold;
`;

export const HeaderForm = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    padding: 0 30px;
    align-items: center;
    border-bottom: 1px solid black;
`;

export const MenuAcoes = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    padding: 0 30px;
    align-items: center;
`;

export const Botao = styled.button`
    width: ${props => props.width || '50px'};
    height: ${props => props.height || '30px'};
    background-color: ${props => props.background || 'orange'};
    border-radius: 5px;
    font-weight: bold;
    margin: 10px 10px 10px 0 ;
    color: ${props => props.color || 'black'};
    cursor: pointer;
    outline: 0px;
`;
