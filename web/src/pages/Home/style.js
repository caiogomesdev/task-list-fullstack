import styled from "styled-components"

export const Content = styled.main`
display: flex;
width: 100%;
justify-content: center;
`
export const TaskContent = styled.article`
display: flex;
flex-direction: column;
width: 100%;
max-width: 800px;
justify-content: center;
text-align: center;
`
export const TaskRow = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`
export const TaskCollumn = styled.div`
display: flex;
flex: 1;
flex-direction: column;
justify-content: flex-start;
margin: 0px 10px;
`
export const TaskHeader = styled.h2`
padding-bottom: 5px;
font-weight: 400;
width: 100%;
//border-bottom: solid 1px;
`
export const TaskBody = styled.div`
padding: 5px 0px;
`