import { Box, Button, TextField } from "@mui/material";
// import React from 'react'
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";

//! 1. Kullanim yolu props type 

// const AddTodoComp = ({
//   addTodo,
// }: {
//   addTodo: (text: string) => Promise<void>;
// }) => {
//   // const [text, setText] =  useState<string>("")
//   const [text, setText] = useState(""); // TypeScript, string, boolean ve number gibi ilkel (primitive) değerlerin türlerini otomatik olarak algılar. Ancak, dizi (array) ve obje (object) gibi ilkel olmayan (non-primitive) yapılar, boş olduklarında her türlü değeri kabul edebilirler. Bu nedenle, bu tür veri yapıları için tür belirtmek önemlidir.

//   const handleClick = () => {
//     addTodo(text);
//     setText("");
//   };

//   return (
//     <Box>
//       <TextField
//         id="outlined-disabled"
//         label="New Todo"
//         variant="outlined"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />

//       <Button 
//       variant="contained" 
//       color="success" 
//       disabled={!text.trim()}
//       endIcon={<SaveIcon />}
//       onClick={handleClick}
//       >
//         Save Todo
//       </Button>
//     </Box>
//   );
// };

// export default AddTodoComp;



//! 2. Kullanim yolu props type

interface IAddTodoComp {
  // addTodo: (text: string) => Promise<void>;
  addTodo:AddFn;

}

const AddTodoComp = ({ addTodo}: IAddTodoComp ) => {
  // const [text, setText] =  useState<string>("")
  const [text, setText] = useState(""); // TypeScript, string, boolean ve number gibi ilkel (primitive) değerlerin türlerini otomatik olarak algılar. Ancak, dizi (array) ve obje (object) gibi ilkel olmayan (non-primitive) yapılar, boş olduklarında her türlü değeri kabul edebilirler. Bu nedenle, bu tür veri yapıları için tür belirtmek önemlidir.

  const handleClick = () => {
    addTodo(text);
    setText("");
  };

  return (
    <Box>
      <TextField
        id="outlined-disabled"
        label="New Todo"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button 
      variant="contained" 
      color="success" 
      disabled={!text.trim()}
      endIcon={<SaveIcon />}
      onClick={handleClick}
      >
        Save Todo
      </Button>
    </Box>
  );
};

export default AddTodoComp;
