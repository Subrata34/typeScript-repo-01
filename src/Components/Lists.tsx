import React from 'react'
import List from './List'

const Lists = () => {
  const items:string[]=["subrata","linkcon"];
  const onClick=(text:string):void=>alert(text);
  return (
    <div>
      <List items={items} onClick={onClick} />{""}
    </div>
  )
}

export default Lists