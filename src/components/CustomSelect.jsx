import styled from "styled-components";
import Select from "react-select";

export const CustomSelect =styled(Select).attrs({
    styles:{
        control:(provided)=>({
            ...provided,
            backgroundColor:'var(--colors--ui-base)',
            color:'var(--colors-text)',
            borderRadius:'var(--radius)',
            padding:'0.25rem',
            border:'none',
            boxShadow:'var(--shadow)',
            height:'50px'
        }),
        option:(provided,state)=>({
            ...provided,
            cursor:'pointer',
            color:state.isSelected? 'var(--color-bg)': 'var(--color-text)',
            backgroundColor:state.isSelected?'var(--color-bg)': 'var(--colors-ui-base)',
        })
    }

})``
