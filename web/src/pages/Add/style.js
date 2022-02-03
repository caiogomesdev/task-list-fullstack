import styled from "styled-components"

export const AddTaskContent = styled.div`
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const FormAddTask = styled.div`
display: flex;
flex-direction: column;
width: 80%;
max-width: 700px;

*{
    font-size: 17px;
    margin: 2px 0px;
}
textarea, input{
    outline: none;
    border: none;
    height: 40px;

    padding: 0px 2px;
    font-size: 20px;
    box-shadow: 0px 1px 5px rgba(0,0,0, .1);
}

textarea{
    padding-top: 6px;
    height: 80px;
    resize: none;

}
input:focus,textarea:focus{
    outline: solid 2px #b7e4c7;
}
`
export const BtnAdd = styled.button`

margin-top: 7px;
cursor: pointer;
background-color: #74c69d;
border: none;
padding: 2px;
transition: all ease-in-out .12s;
box-shadow: 0px 1px 5px rgba(0,0,0, .3);
font-weight: 400;
color: #fff;
padding: 8px;
:hover{
    background-color: #95d5b2;
}
`
