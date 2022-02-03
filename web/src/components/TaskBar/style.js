import styled from "styled-components";


export const NonSelect = styled.div`
-webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
`

export const Bar = styled.div`
cursor: ${props => props.Moved ? "move" : "pointer"};
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
padding: 5px 10px;
box-shadow: 0px 3px 5px rgba(0,0,0,.1);

border-radius: 5px;
transition: all ease-in-out 0.05s;
margin-bottom: 15px;

&:hover{
    background-color: #f6f6f6;
}

`


export const BarBody = styled.div`
`