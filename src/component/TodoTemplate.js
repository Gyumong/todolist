import React,{useState,useCallback} from 'react';
import styled from 'styled-components'



const Input = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  width: 190px;
  height: 33px;
  padding: 3px;
  background: transparent;
  outline: none;
  border: none;
  font-size: 22px;
  color: white;
`;

const TodoTemplateBlock = styled.div`
    width:512px;
    margin-left:auto;
    margin-right:auto;
    margin-top:auto;
    border-radius:4px;
   
    background-color:black;
    color:white;
`;





const TodoTemplate=({children})=>{
    const [value,setValue]= useState('');
   
    const onKeyPress =useCallback(e=>{
        if(e.key === 'Enter'){
            setValue(e.target.value);
        }
        e.target.value='';
    },[]);
    
    return (
        <>
        <Containers value={value}>
            <Input placeholder="테마를 입력하세요"
          
            onKeyPress={onKeyPress}
            ></Input>
        <TodoTemplateBlock>
            <div>일정 관리</div>
            <div>{children}</div>
        </TodoTemplateBlock>
        </Containers>
        </>
    );
};
const Containers = styled.div`
    width:100%;
    height:100%;
    background-size:cover;
    position:absolute;
    top:0;
    left:0;
    background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.7) 70%,
      rgba(20, 20, 20, 1)
    ),url(https://source.unsplash.com/random/1920x1080${props=>props.value});
`;

export default TodoTemplate;