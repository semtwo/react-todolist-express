
import { List , Paper, Container} from '@mui/material';
import { useState } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';

// update, read print-list
/*
function ItemListComp({items}){
  return(<Paper>
    <List>
      {
        items.map((item, i)=>(<Todo item ={item} key ={item.id + i} />))
      }
    </List>
  </Paper>);
}
*/


function App() {
  const [items, setItems] = useState([
    {id : "0", title: "hi", done : true},
    {id : "1", title: "hello", done : false}
  ]);

  //1. create
  function addItem(newItem){
    const currItems =[...items, newItem];
    setItems(currItems);
  }  

  //3. update
  function updateItem(newItem){
    const currItems = [...items];
    const idx = currItems.findIndex((elen)=>{
      return elen.id === newItem.id;
    });
    currItems[idx] = newItem; // 수정한 리스트를 덮어씌운다
    setItems(currItems);
  }
  //4. delete
  function deleteItem(delItem){
    const thisItems =[...items];
    const idx = thisItems.findIndex((elen)=>{
      return elen.id === delItem.id;
    })
    thisItems.splice(idx, 1);
    setItems(thisItems);
  }

    //2. read // 삼항연산자를 사용하여 바로 목록 출력  
    const itemListTemp = items.length >0 && (<Paper>
      <List>
        {items.map((item)=>(<Todo 
          item = {item} 
          deleteItem ={deleteItem} 
          updateItem ={updateItem} 
          key = {item.id}/>))
        }
      </List>
    </Paper>);

  return (
    <div>
      <Container>
        <AddTodo onAddItem={addItem} idx={items.length}/>
        <div className='TodoList'>{itemListTemp}</div>
      </Container>
    </div>
  );
}

export default App;
