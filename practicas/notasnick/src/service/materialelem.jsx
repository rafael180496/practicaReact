
// Import Materialize
import M from "materialize-css";
export const CargaElementoMateria=()=>{
    let nav = document.querySelectorAll(".sidenav");
    let drow = document.querySelectorAll(".dropdown-trigger");
    let tool= document.querySelectorAll('.tooltipped');
    let modal=document.querySelectorAll('.modal')
    let btnfloating = document.querySelectorAll('.fixed-action-btn');
    M.Modal.init(modal,{
      dismissible:false
    })
    M.Tooltip.init(tool,{})
    M.Sidenav.init(nav, {})
    M.Dropdown.init(drow, {
      alignment:'right'
    })
    M.FloatingActionButton.init(btnfloating,{
      direction:'left',
      hoverEnabled:true
    })
    M.updateTextFields();
}